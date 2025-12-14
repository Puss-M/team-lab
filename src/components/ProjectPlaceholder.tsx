import React from 'react';
import Layout from '@theme/Layout';

interface Props {
  title: string;
  description: string;
}

const ProjectPlaceholder = ({ title, description }: Props) => (
  <Layout title={title} description={description}>
    <div className="container margin-vert--xl text--center">
      <h1>{title}</h1>
      <p className="hero__subtitle">{description}</p>
      <div className="alert alert--info margin-vert--md">
        🚧 内容正在建设中 (Content Under Construction)
      </div>
      <p>
        我们正在整理相关项目的详细资料，敬请期待。<br />
        您可以查看 <a href="/archives">历史归档</a> 了解往期成果。
      </p>
    </div>
  </Layout>
);

export default ProjectPlaceholder;
