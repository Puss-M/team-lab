import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Team() {
  const members = {
    faculty: [
      {
        name: "张教授",
        title: "实验室主任 / 教授 / 博士生导师",
        photo: "https://via.placeholder.com/200",
        bio: "研究兴趣：人工智能、深度学习、自然语言处理。发表论文100+篇，获得多项国家级科研奖励。",
        email: "zhang@university.edu",
        homepage: "#",
        scholar: "#",
      },
    ],
    phd: [
      {
        name: "李博士生",
        year: "2022级",
        photo: "https://via.placeholder.com/150",
        research: "计算机视觉、目标检测",
        email: "li@university.edu",
      },
      {
        name: "王博士生",
        year: "2023级",
        photo: "https://via.placeholder.com/150",
        research: "自然语言处理、大语言模型",
        email: "wang@university.edu",
      },
    ],
    master: [
      {
        name: "陈硕士生",
        year: "2023级",
        photo: "https://via.placeholder.com/150",
        research: "推荐系统、知识图谱",
      },
      {
        name: "刘硕士生",
        year: "2024级",
        photo: "https://via.placeholder.com/150",
        research: "强化学习、机器人控制",
      },
    ],
  };

  const MemberCard = ({ member, showFullBio = false }) => (
    <div className="card" style={{padding: '1.5rem', height: '100%', textAlign: 'center'}}>
      <div style={{
        width: showFullBio ? '150px' : '120px',
        height: showFullBio ? '150px' : '120px',
        margin: '0 auto 1rem',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: showFullBio ? '3rem' : '2.5rem',
      }}>
        👤
      </div>
      <Heading as="h3" style={{marginTop: 0, marginBottom: '0.5rem', fontSize: showFullBio ? '1.5rem' : '1.25rem'}}>
        {member.name}
      </Heading>
      <p style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem', fontWeight: 600, fontSize: '0.9rem'}}>
        {member.title || `${member.year} • ${member.research}`}
      </p>
      {member.bio && (
        <p style={{marginBottom: '1rem', fontSize: '0.95rem', color: 'var(--ifm-color-content-secondary)'}}>
          {member.bio}
        </p>
      )}
      {member.email && (
        <p style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>
          📧 <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>
      )}
      {(member.homepage || member.scholar) && (
        <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem'}}>
          {member.homepage && (
            <a href={member.homepage} className="button button--secondary button--sm">
              🏠 主页
            </a>
          )}
          {member.scholar && (
            <a href={member.scholar} className="button button--secondary button--sm">
              🎓 Scholar
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <Layout
      title="团队成员"
      description="认识实验室的教师和学生">
      <div className="container margin-vert--lg">
        <Heading as="h1">👥 团队成员</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          实验室由优秀的教师和充满活力的研究生组成
        </p>

        {/* Faculty */}
        <section style={{marginBottom: '4rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>
            👨‍🏫 教师团队
          </Heading>
          <div className="row">
            {members.faculty.map((member, index) => (
              <div className="col col--6" key={index} style={{marginBottom: '2rem'}}>
                <MemberCard member={member} showFullBio={true} />
              </div>
            ))}
          </div>
        </section>

        {/* PhD Students */}
        <section style={{marginBottom: '4rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>
            🎓 博士生
          </Heading>
          <div className="row">
            {members.phd.map((member, index) => (
              <div className="col col--4" key={index} style={{marginBottom: '2rem'}}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </section>

        {/* Master Students */}
        <section style={{marginBottom: '4rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>
            📚 硕士生
          </Heading>
          <div className="row">
            {members.master.map((member, index) => (
              <div className="col col--4" key={index} style={{marginBottom: '2rem'}}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </section>

        {/* Join Us */}
        <div className="card" style={{
          padding: '2.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
          color: 'white',
        }}>
          <Heading as="h2" style={{marginTop: 0, marginBottom: '1rem', color: 'white'}}>
            🌟 加入我们
          </Heading>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95}}>
            实验室长期招收对人工智能研究充满热情的博士生、硕士生和本科生。
            欢迎联系我们了解更多信息！
          </p>
          <a href="/about/contact" className="button button--secondary button--lg">
            📧 联系方式
          </a>
        </div>
      </div>
    </Layout>
  );
}
