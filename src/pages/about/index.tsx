import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function About() {
  const researchAreas = [
    {
      icon: '🤖',
      title: '人工智能',
      description: '深度学习、机器学习、强化学习等前沿AI技术研究',
    },
    {
      icon: '💬',
      title: '自然语言处理',
      description: '大语言模型、文本生成、信息抽取、问答系统',
    },
    {
      icon: '👁️',
      title: '计算机视觉',
      description: '图像识别、目标检测、视频理解',
    },
    {
      icon: '📊',
      title: '数据挖掘',
      description: '知识图谱、推荐系统、大数据分析',
    },
  ];

  return (
    <Layout
      title="关于实验室"
      description="了解实验室的研究方向和愿景">
      <div className="container margin-vert--lg">
        <Heading as="h1">关于我们</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          致力于推动人工智能技术的创新与应用
        </p>

        {/* Lab Introduction */}
        <section style={{marginBottom: '4rem'}}>
          <div className="card" style={{padding: '2.5rem'}}>
            <Heading as="h2" style={{marginTop: 0, marginBottom: '1.5rem'}}>
              🏛️ 实验室简介
            </Heading>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem'}}>
              XXX实验室成立于20XX年，隶属于XXX大学XXX学院。实验室由XXX教授领导，
              致力于人工智能、自然语言处理、计算机视觉等前沿技术的研究与应用。
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem'}}>
              我们的研究成果发表在CVPR、NeurIPS、ACL等顶级国际会议和期刊，
              并与多家企业建立了产学研合作关系。
            </p>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 0}}>
              实验室秉承"探索未知，创造未来"的理念，培养了一批优秀的研究生和博士生，
              为学术界和工业界输送高质量人才。
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section style={{marginBottom: '4rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem', textAlign: 'center'}}>
            🔬 研究方向
          </Heading>
          <div className="row">
            {researchAreas.map((area, index) => (
              <div className="col col--6" key={index} style={{marginBottom: '2rem'}}>
                <div className="card" style={{padding: '2rem', height: '100%', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>
                    {area.icon}
                  </div>
                  <Heading as="h3" style={{marginBottom: '1rem', fontSize: '1.5rem'}}>
                    {area.title}
                  </Heading>
                  <p style={{color: 'var(--ifm-color-content-secondary)', marginBottom: 0}}>
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{marginBottom: '4rem'}}>
          <div className="row">
            <div className="col col--6" style={{marginBottom: '2rem'}}>
              <div className="card" style={{
                padding: '2rem',
                height: '100%',
                background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
                color: 'white',
              }}>
                <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem', color: 'white'}}>
                  🎯 我们的使命
                </Heading>
                <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: 0}}>
                  推动人工智能技术的理论创新与实际应用，培养具有国际视野的高水平研究人才，
                  为国家科技进步和社会发展做出贡献。
                </p>
              </div>
            </div>
            <div className="col col--6" style={{marginBottom: '2rem'}}>
              <div className="card" style={{
                padding: '2rem',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}>
                <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem', color: 'white'}}>
                  🚀 我们的愿景
                </Heading>
                <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: 0}}>
                  成为国际一流的人工智能研究实验室，在核心技术上取得突破性进展，
                  培养引领未来的科技人才。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <div className="card" style={{padding: '2rem', textAlign: 'center'}}>
            <Heading as="h3" style={{marginTop: 0, marginBottom: '1.5rem'}}>
              了解更多
            </Heading>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/about/team" className="button button--primary">
                👥 查看团队成员
              </Link>
              <Link to="/about/contact" className="button button--secondary">
                📧 联系我们
              </Link>
              <Link to="/achievements/papers" className="button button--secondary">
                📚 查看研究成果
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
