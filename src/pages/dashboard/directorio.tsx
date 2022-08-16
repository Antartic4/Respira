import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../common/components/Layout";

import { requireAuth } from "../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <>
        <br />
        <div className="flex justify-evenly">
          <div>1</div>
          <div>|</div>
          <div>2</div>
        </div>
        <br />
        <div className="flex justify-evenly">
          <div>1</div>
          <div>|</div>
          <div>2</div>
          <div>|</div>
          <div>3</div>
          <div>|</div>
          <div>4</div>
        </div>
        <br />
        <div className="flex justify-evenly">
          <div>1</div>
          <div>|</div>
          <div>2</div>
          <div>|</div>
          <div>3</div>
          <div>|</div>
          <div>4</div>
          <div>|</div>
          <div>5</div>
          <div>|</div>
          <div>6</div>
          <div>|</div>
          <div>7</div>
          <div>|</div>
          <div>8</div>
        </div>
        <br />
        <div className="flex justify-evenly">
          <div>1</div>
          <div>|</div>
          <div>2</div>
          <div>|</div>
          <div>3</div>
          <div>|</div>
          <div>4</div>
          <div>|</div>
          <div>5</div>
          <div>|</div>
          <div>6</div>
          <div>|</div>
          <div>7</div>
          <div>|</div>
          <div>8</div>
          <div>|</div>
          <div>9</div>
          <div>|</div>
          <div>10</div>
          <div>|</div>
          <div>11</div>
          <div>|</div>
          <div>12</div>
          <div>|</div>
          <div>13</div>
          <div>|</div>
          <div>14</div>
          <div>|</div>
          <div>15</div>
          <div>|</div>
          <div>16</div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
