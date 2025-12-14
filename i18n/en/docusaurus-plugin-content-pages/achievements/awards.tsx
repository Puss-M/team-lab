import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Awards() {
  const awards = [
    {
      year: 2024,
      title: "最佳论文奖",
      event: "XXX国际会议",
      recipients: "张三, 李四",
      description: "论文《XXXX》获得会议最佳论文奖",
    },
    {
      year: 2023,
      title: "优秀学生奖学金",
      event: "大学名称",
      recipients: "王五",
      description: "获得国家奖学金",
    },
  ];

  // Group awards by year
  const awardsByYear = awards.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }
    acc[award.year].push(award);
    return acc;
  }, {} as Record<number, typeof awards>);

  const years = Object.keys(awardsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <Layout
      title="获奖情况"
      description="查看实验室成员的获奖荣誉">
      <div className="container margin-vert--lg">
        <Heading as="h1">🏆 获奖情况</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          实验室成员获得的学术荣誉和奖项
        </p>

        {years.map((year) => (
          <div key={year} style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{
              fontSize: '1.75rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid var(--ifm-color-primary)',
            }}>
              {year} 年
            </Heading>

            <div className="row">
              {awardsByYear[Number(year)].map((award, index) => (
                <div className="col col--12" key={index} style={{marginBottom: '1.5rem'}}>
                  <div className="card" style={{padding: '1.5rem', display: 'flex', alignItems: 'start'}}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginRight: '1.5rem',
                      flexShrink: 0,
                    }}>
                      🏅
                    </div>
                    <div style={{flex: 1}}>
                      <Heading as="h3" style={{marginTop: 0, marginBottom: '0.5rem', fontSize: '1.25rem'}}>
                        {award.title}
                      </Heading>
                      <p style={{
                        color: 'var(--ifm-color-primary)',
                        marginBottom: '0.5rem',
                        fontWeight: 600
                      }}>
                        {award.event}
                      </p>
                      <p style={{marginBottom: '0.5rem', color: 'var(--ifm-color-content-secondary)'}}>
                        <strong>获奖者：</strong> {award.recipients}
                      </p>
                      <p style={{marginBottom: 0}}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {awards.length === 0 && (
          <div className="card" style={{padding: '3rem', textAlign: 'center'}}>
            <p style={{fontSize: '3rem', marginBottom: '1rem'}}>🎖️</p>
            <Heading as="h3">获奖信息即将更新</Heading>
            <p style={{color: 'var(--ifm-color-content-secondary)'}}>
              我们正在整理获奖信息，敬请期待！
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
