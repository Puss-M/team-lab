import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Archives() {
  return (
    <Layout
      title="历史归档"
      description="访问实验室的历史文档和旧版网站">
      <div className="container margin-vert--lg">
        <Heading as="h1">📜 历史归档</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          实验室的历史资料和旧版网站入口
        </p>

        <div className="row">
          {/* Old Website Link */}
          <div className="col col--6" style={{marginBottom: '2rem'}}>
            <a href="https://old-lab-site.example.edu" className="card" style={{
              padding: '2rem',
              height: '100%',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌐</div>
              <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem'}}>
                旧版网站
              </Heading>
              <p style={{color: 'var(--ifm-color-content-secondary)', marginBottom: '1rem'}}>
                访问实验室的旧版官方网站，查看历史内容和存档资料
              </p>
              <span style={{color: 'var(--ifm-color-primary)', fontWeight: 600}}>
                点击访问 →
              </span>
            </a>
          </div>

          {/* Historical Documents */}
          <div className="col col--6" style={{marginBottom: '2rem'}}>
            <div className="card" style={{padding: '2rem', height: '100%'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📚</div>
              <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem'}}>
                历史文档库
              </Heading>
              <p style={{color: 'var(--ifm-color-content-secondary)', marginBottom: '1.5rem'}}>
                实验室早期的研究资料、会议记录和技术文档
              </p>
              <div>
                <a href="#" className="button button--secondary button--sm">
                  浏览文档
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section style={{marginTop: '3rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>
            🕒 实验室大事记
          </Heading>

          <div className="card" style={{padding: '2rem'}}>
            <div style={{borderLeft: '3px solid var(--ifm-color-primary)', paddingLeft: '2rem'}}>
              
              {/* Timeline Item */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{marginTop: 0, marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                  2024年
                </h4>
                <ul style={{marginBottom: 0}}>
                  <li>新版实验室网站上线</li>
                  <li>实验室扩充新成员</li>
                  <li>多篇论文被顶会接收</li>
                </ul>
              </div>

              {/* Timeline Item */}
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{marginTop: 0, marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                  2023年
                </h4>
                <ul style={{marginBottom: 0}}>
                  <li>开源重要研究项目</li>
                  <li>举办学术研讨会</li>
                </ul>
              </div>

              {/* Timeline Item */}
              <div style={{marginBottom: 0}}>
                <h4 style={{marginTop: 0, marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                  2020年
                </h4>
                <ul style={{marginBottom: 0}}>
                  <li>实验室正式成立</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Info Box */}
        <div className="card" style={{padding: '1.5rem', marginTop: '3rem', backgroundColor: 'var(--ifm-color-primary)', color: 'white'}}>
          <p style={{marginBottom: 0}}>
            💡 <strong>提示:</strong> 如果您在旧版网站或历史文档中发现任何问题，欢迎通过 <a href="/about/contact" style={{color: 'white', textDecoration: 'underline'}}>联系我们</a> 页面反馈。
          </p>
        </div>
      </div>
    </Layout>
  );
}
