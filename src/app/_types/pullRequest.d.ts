import { Repository } from '@/app/_types/repository';
import { User } from '@/app/_types/user';

export type PullRequest = {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: User;
  body: string | null;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
  merge_commit_sha: string;
  assignee: string | null;
  assignees: any[];
  requested_reviewers: any[];
  requested_teams: any[];
  labels: any[];
  milestone: string | null;
  draft: boolean;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: {
    label: string;
    ref: string;
    sha: string;
    user: User;
    repo: Repository;
  };
  base: {
    label: string;
    ref: string;
    sha: string;
    user: User;
    repo: Repository;
  };
  _links: {
    self: Link;
    html: Link;
    issue: Link;
    comments: Link;
    review_comments: Link;
    review_comment: Link;
    commits: Link;
    statuses: Link;
  };
};

type Link = {
  href: string;
};
