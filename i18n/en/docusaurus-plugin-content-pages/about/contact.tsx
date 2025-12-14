import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('表单提交功能待实现！请直接使用邮箱联系我们。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout
      title="联系我们"
      description="联系实验室团队">
      <div className="container margin-vert--lg">
        <Heading as="h1">📧 联系我们</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          欢迎通过以下方式与我们取得联系
        </p>

        <div className="row">
          {/* Contact Information */}
          <div className="col col--5" style={{marginBottom: '2rem'}}>
            <div className="card" style={{padding: '2rem', height: '100%'}}>
              <Heading as="h2" style={{marginTop: 0, marginBottom: '2rem', fontSize: '1.5rem'}}>
                联系信息
              </Heading>

              <div style={{marginBottom: '1.5rem'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📍</div>
                <h4 style={{marginBottom: '0.5rem'}}>实验室地址</h4>
                <p style={{color: 'var(--ifm-color-content-secondary)', marginBottom: 0}}>
                  中国XXX省XXX市<br />
                  XXX大学XXX学院XXX楼XXX室<br />
                  邮编: 100000
                </p>
              </div>

         <div style={{marginBottom: '1.5rem'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✉️</div>
                <h4 style={{marginBottom: '0.5rem'}}>电子邮件</h4>
                <p style={{marginBottom: '0.25rem'}}>
                  <a href="mailto:lab@university.edu">lab@university.edu</a>
                </p>
                <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.9rem', marginBottom: 0}}>
                  通常在1-2个工作日内回复
                </p>
              </div>

              <div style={{marginBottom: '1.5rem'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🌐</div>
                <h4 style={{marginBottom: '0.5rem'}}>在线资源</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <a href="https://github.com/your-org" className="button button--secondary button--sm">
                    💻 GitHub
                  </a>
                  <a href="#" className="button button--secondary button--sm">
                    🐦 Twitter
                  </a>
                </div>
              </div>

              <div>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💬</div>
                <h4 style={{marginBottom: '0.5rem'}}>微信联系</h4>
                <p style={{color: 'var(--ifm-color-content-secondary)', marginBottom: '1rem', fontSize: '0.95rem'}}>
                  扫描二维码添加实验室招生负责人微信
                </p>
                <div style={{
                  width: '150px',
                  height: '150px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  textAlign: 'center',
                  padding: '1rem',
                }}>
                  请在此放置<br />微信二维码<br />图片
                </div>
                <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: 0}}>
                  请备注：咨询+姓名+学校
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col col--7" style={{marginBottom: '2rem'}}>
            <div className="card" style={{padding: '2rem'}}>
              <Heading as="h2" style={{marginTop: 0, marginBottom: '1.5rem', fontSize: '1.5rem'}}>
                在线留言
              </Heading>
              <p style={{marginBottom: '2rem', color: 'var(--ifm-color-content-secondary)'}}>
                填写以下表单，我们会尽快回复您的咨询
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="name" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      fontSize: '1rem',
                    }}
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      fontSize: '1rem',
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="subject" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    咨询类型 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      fontSize: '1rem',
                    }}
                  >
                    <option value="">请选择咨询类型</option>
                    <option value="admission">招生咨询</option>
                    <option value="collaboration">合作交流</option>
                    <option value="resource">资源使用</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    留言内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                    placeholder="请详细描述您的问题或需求..."
                  />
                </div>

                <button
                  type="submit"
                  className="button button--primary button--lg button--block"
                >
                  📤 发送留言
                </button>

                <p style={{
                  marginTop: '1rem',
                  marginBottom: 0,
                  fontSize: '0.85rem',
                  color: 'var(--ifm-color-content-secondary)',
                  textAlign: 'center'
                }}>
                  提交表单即表示您同意我们的隐私政策
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="card" style={{padding: '1.5rem', marginTop: '2rem', backgroundColor: 'var(--ifm-background-surface-color, #f9fafb)'}}>
          <p style={{marginBottom: 0, fontSize: '0.95rem'}}>
            💡 <strong>招生提示:</strong> 如果您对加入实验室感兴趣，请在邮件中附上您的简历(CV)、研究兴趣说明，
            以及代表性学术成果(如有)。我们欢迎对人工智能研究充满热情的优秀学生！
          </p>
        </div>
      </div>
    </Layout>
  );
}
