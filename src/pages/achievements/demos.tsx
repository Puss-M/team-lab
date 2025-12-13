import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Demos() {
  const demos = [
    {
      title: "智能问答系统演示",
      description: "基于大语言模型的智能问答系统，支持多轮对话和知识库检索",
      image: "/img/demo-placeholder.png",
      demoLink: "#",
      codeLink: "#",
      tags: ["NLP", "LLM", "问答系统"],
    },
    {
      title: "图像识别工具",
      description: "实时图像识别和分类工具，支持多种深度学习模型",
      image: "/img/demo-placeholder.png",
      demoLink: "#",
      codeLink: "#",
      tags: ["计算机视觉", "深度学习"],
    },
  ];

  return (
    <Layout
      title="项目演示"
      description="查看实验室的研究项目和系统演示">
      <div className="container margin-vert--lg">
        <Heading as="h1">🎬 项目演示</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          实验室研发的系统、工具和应用的在线演示
        </p>

        <div className="row">
          {demos.map((demo, index) => (
            <div className="col col--6" key={index} style={{marginBottom: '2rem'}}>
              <div className="card" style={{padding: 0, overflow: 'hidden', height: '100%'}}>
                {/* Demo Preview Image */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem'
                }}>
                  🎯
                </div>
                
                <div style={{padding: '1.5rem'}}>
                  <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem'}}>
                    {demo.title}
                  </Heading>
                  <p style={{marginBottom: '1rem', color: 'var(--ifm-color-content-secondary)'}}>
                    {demo.description}
                  </p>
                  
                  {/* Tags */}
                  <div style={{marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                    {demo.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.85rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          backgroundColor: 'var(--ifm-color-primary)',
                          color: 'white',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <a href={demo.demoLink} className="button button--primary button--block">
                      🚀 在线演示
                    </a>
                    <a href={demo.codeLink} className="button button--secondary">
                      💻 代码
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {demos.length === 0 && (
          <div className="card" style={{padding: '3rem', textAlign: 'center'}}>
            <p style={{fontSize: '3rem', marginBottom: '1rem'}}>🚧</p>
            <Heading as="h3">演示项目即将上线</Heading>
            <p style={{color: 'var(--ifm-color-content-secondary)'}}>
              我们正在整理和优化项目演示，敬请期待！
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
