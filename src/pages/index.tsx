import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HeroCarousel from "../components/HeroCarousel";
import ResearchAreaIcons from "../components/ResearchAreaIcons";

// Latest News & Highlights (Swift Coding Club Style - Structured Grid)
function ResearchHighlights() {
  return (
    <section
      className={styles.features}
      style={{
        backgroundColor: "var(--ifm-background-surface-color)",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div className="row">
          {/* News Column */}
          <div className="col col--6">
            <div
              className="card"
              style={{
                height: "100%",
                borderTop: "4px solid var(--ifm-color-primary)",
              }}
            >
              <div
                className="card__header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Heading as="h3">小组动态</Heading>
                <Link to="/blog" style={{ fontSize: "0.9rem" }}>
                  查看更多 →
                </Link>
              </div>
              <div className="card__body">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      marginBottom: "1rem",
                      borderBottom: "1px solid var(--ifm-color-emphasis-200)",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    <small
                      style={{
                        color: "var(--ifm-color-primary)",
                        fontWeight: 600,
                      }}
                    >
                      本周五 19:00
                    </small>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        margin: "0.2rem 0",
                      }}
                    >
                      分享会：Agent 智能体实战
                    </div>
                    <small
                      style={{ color: "var(--ifm-color-content-secondary)" }}
                    >
                      主讲人：Alex。地点：活动室 302。
                    </small>
                  </li>
                  <li
                    style={{
                      marginBottom: "1rem",
                      borderBottom: "1px solid var(--ifm-color-emphasis-200)",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    <small
                      style={{
                        color: "var(--ifm-color-primary)",
                        fontWeight: 600,
                      }}
                    >
                      招募中
                    </small>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        margin: "0.2rem 0",
                      }}
                    >
                      欢迎新同学加入！
                    </div>
                    <small
                      style={{ color: "var(--ifm-color-content-secondary)" }}
                    >
                      无论你是编程大牛还是金融新手，只要有热情，欢迎加入我们。
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Publications Column (Now Sharing/Learning) */}
          <div className="col col--6">
            <div
              className="card"
              style={{
                height: "100%",
                borderTop: "4px solid var(--ifm-color-primary)",
              }}
            >
              <div
                className="card__header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Heading as="h3">精选分享 / 学习沉淀</Heading>
                <Link to="/archives" style={{ fontSize: "0.9rem" }}>
                  历史归档 →
                </Link>
              </div>
              <div className="card__body">
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <Link
                      to="#"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Transformer 源码解析
                    </Link>
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--ifm-color-content-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    手把手带你读懂 Attention Is All You Need 代码实现。
                  </div>
                  <div
                    style={{
                      fontStyle: "italic",
                      color: "var(--ifm-color-primary)",
                    }}
                  >
                    标签：深度学习, NLP, 源码
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <Link
                      to="#"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      量化交易策略入门
                    </Link>
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--ifm-color-content-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    从零开始构建你的双均线策略回测系统。
                  </div>
                  <div
                    style={{
                      fontStyle: "italic",
                      color: "var(--ifm-color-primary)",
                    }}
                  >
                    标签：FinTech, 量化, Python
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Lab Life / Community Section (Shalek Lab Style)
function LabLife() {
  return (
    <section className="lab-life-section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Heading as="h2">实验室生活与文化</Heading>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--ifm-color-content-secondary)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            除了科研，我们也是一个充满活力的思考者和创造者社区。
            我们重视合作、多样性和工作与生活的平衡。
          </p>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="lab-life-image">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Team Meeting"
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                fontWeight: 600,
              }}
            >
              每周研讨会
            </div>
          </div>
          <div className="col col--4">
            <div className="lab-life-image">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Conference"
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                fontWeight: 600,
              }}
            >
              学术会议
            </div>
          </div>
          <div className="col col--4">
            <div className="lab-life-image">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Team Building"
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                fontWeight: 600,
              }}
            >
              团队团建
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            了解更多关于我们
          </Link>
        </div>
      </div>
    </section>
  );
}

import AlumniMap from "../components/AlumniMap";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="XXX Research Group - Laboratory Website"
    >
      {/* 1. Dynamic Hero Carousel (Shalek/Guzj style) */}
      <HeroCarousel />

      <main>
        {/* 2. Structured News & Pubs (Guzj style) */}
        <ResearchHighlights />

        {/* 3. Global Alumni Network (NEW) */}
        <AlumniMap />

        {/* 4. Icon-based Research Areas (Gu Lab style) */}
        <ResearchAreaIcons />

        {/* 5. Lab Life Visuals (Shalek style) */}
        <LabLife />
      </main>
    </Layout>
  );
}
