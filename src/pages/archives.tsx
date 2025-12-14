import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Archives() {
  return (
    <Layout title="历史归档" description="Swift Coding Club 历史归档">
      <div className="container margin-vert--lg">
        <Heading as="h1" className="margin-bottom--lg">历史归档</Heading>
        <div className="alert alert--info margin-bottom--lg">
          这里存放了社团往期的分享资料和活动记录。
        </div>
        
        <div className="row">
          <div className="col col--12">
            <h2>2025 Spring</h2>
            <ul>
              <li><a href="#">(尚未开始)</a></li>
            </ul>
            
            <h2>2024 Fall</h2>
            <ul>
              <li><a href="#">Transformer 源码解析 (Slides + Code)</a> - 2024.12.10</li>
              <li><a href="#">量化交易策略入门 (Recording)</a> - 2024.11.28</li>
              <li><a href="#">DeepSeek 模型本地部署指南</a> - 2024.11.15</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
