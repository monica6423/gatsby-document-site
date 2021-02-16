import React from 'react';
import axios from 'axios';
import { GoogleReCaptchaProvider, withGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Loader from './Loader.gif'
import { message } from 'antd';
import { Link, injectIntl } from "gatsby-plugin-intl"

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Checkbox,
  Button,
  Alert
} from 'antd';
const { Option } = Select;
const SUBMIT_URL = 'https://kpmg25b6c1.execute-api.ap-northeast-1.amazonaws.com/prod/recaptcha';
const reCaptchaSiteKey = '6Ld_K5MUAAAAAB77dc5tHXdXertQO7IH6-48AUXX';

let captcha = '';

class DemoFormDraft extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    checked: false, 
    showAlert: 'none',
    loading: false
  };


  componentDidMount = () => {
    this.scheduleJob();
  }

  scheduleJob = () => {
    this.refreshRecaptchaToken();
    setTimeout(() => {
      this.scheduleJob();
    }, 1000 * 100);
  }
  
  refreshRecaptchaToken = () => {
    // use key to remount component to regresh recaptchaToken
    this.props.googleReCaptchaProps.executeRecaptcha('homepage').then((key) => {
      captcha = key;
    });

  }

  handleSubmit = e => {
    
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let {name, company, country, phone, email, version} = values;
        if (this.state.checked === false) {
          this.setState({showAlert:''})
        }else{
          this.setState({showAlert:'none'})
          this.setState({loading:true});
          const language = navigator.language || navigator.userLanguage;
          axios.post(SUBMIT_URL, {
            captcha, name, company, country, phone, email, version, language
          })
          .then((response) => {
            this.setState({loading:false});
            this.refreshRecaptchaToken();
            response.data.success?message.success('Please Check your email'):message.error(response.data.msg)
          })

        }
      }
    });
  };

  handleCheckBoxChange = e => {
    this.setState({checked: !this.state.checked});
  }
  handleConfirmBlur = e => {

    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {intl} = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };


    return (
      <>
      {this.state.loading?   
      <div style={{position:'fixed', top:'0', left:'0',width:'100%', height:'100%', backgroundColor:'#F0F0F0', opacity:'0.7', zIndex:'1'}}>
        <div style={{zIndex:'10', opacity:'0.85', margin: 'auto', display: 'block', position:"absolute", top:"50%", textAlign:'center', left:"50%", transform: 'translate(-50%, -50%)'}}>
          <img
                src={Loader}
                style={{ width: '200px' }}
                alt='Loading...'
              />
              <h3 style={{color:'#696969'}}>Processing...</h3>
        </div>
      </div>:null}
      <Form {...formItemLayout}>
        <Form.Item
          label={
            <span>
              {intl.formatMessage({ id: "name" })}
            </span>
          }
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: "companyEmail" })}>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              {intl.formatMessage({ id: "company" })}&nbsp;
              <Tooltip title="Please fill in the company name so we can know more about you">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('company', {
            rules: [{ required: true, message: 'Please input your company name!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: "phone" })}>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              {intl.formatMessage({ id: "country" })}
            </span>
          }
        >
          {getFieldDecorator('country', {
            rules: [{ required: true, message: 'Please input country!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: "product" })}>
          {getFieldDecorator('version', {
            rules: [{ required: true, message: 'Please select the product!' }],
            initialValue: 'wug',
          })(<Select>
            <Option value="wug">Signaal for Whatsup Gold</Option>
            <Option value="netapp">Signaal for NetApp</Option>
            <Option value="paloalto">Signaal for PaloAlto</Option>
          </Select>)}
        </Form.Item>
        <Form.Item className="checkbox" style={{width:'100%'}}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            rules: [
              { required: true, message: 'Please agree to the data collection agreement!' },
            ],
          })(
            <Checkbox onChange={this.handleCheckBoxChange}>
              {intl.formatMessage({ id: "agree" })}<Link to="/privacy">{intl.formatMessage({ id: "personal-data" })}</Link>
            </Checkbox>,
          )}
        </Form.Item>
        <Alert
          message="We Protect Your Data"
          description="Please agree to the Personal Data Collection Agreement."
          type="warning"
          showIcon
          style={{display: this.state.showAlert}}
        />
        <div style={{textAlign:'center'}}>
          <Button type="primary" htmlType="submit"  onClick={this.handleSubmit}>
          {intl.formatMessage({ id: "download" })}
          </Button>
        </div>
      </Form>
      </>
    );
  }
}



const DemoForm = Form.create({ name: 'register' })(DemoFormDraft);

const HomeComponent = withGoogleReCaptcha(DemoForm);
class WrappedDemoForm extends React.Component {
  render() {
    return (
      <GoogleReCaptchaProvider reCaptchaKey={reCaptchaSiteKey}>
        <HomeComponent {...this.props}/>
      </GoogleReCaptchaProvider>
    );
  }
}

export default injectIntl(WrappedDemoForm)

