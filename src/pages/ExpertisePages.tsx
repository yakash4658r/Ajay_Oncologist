import React from 'react';
import ExpertiseTemplate from './ExpertiseTemplate';

interface PageProps {
  setCurrentPage: (page: string) => void;
}

export function BreastCancerSurgeryPage(props: PageProps) {
  return <ExpertiseTemplate title="Breast Cancer Surgery" description="Breast conservation surgery, oncoplasty, and mastectomy — treating the disease while preserving form and confidence." setCurrentPage={props.setCurrentPage} />;
}

export function ThyroidCancerSurgeryPage(props: PageProps) {
  return <ExpertiseTemplate title="Thyroid Cancer Surgery" description="Surgical management of both cancerous and benign thyroid conditions." setCurrentPage={props.setCurrentPage} />;
}

export function GICancerSurgeryPage(props: PageProps) {
  return <ExpertiseTemplate title="GI Cancer Surgery" description="Comprehensive surgical treatment for stomach and gastrointestinal cancers, from diagnosis to definitive surgery." setCurrentPage={props.setCurrentPage} />;
}

export function GynecologicalCancerSurgeryPage(props: PageProps) {
  return <ExpertiseTemplate title="Gynecological Cancer Surgery" description="Surgical oncology care for uterine, endometrial, and ovarian cancers." setCurrentPage={props.setCurrentPage} />;
}

export function SoftTissueSarcomaPage(props: PageProps) {
  return <ExpertiseTemplate title="Soft Tissue Sarcoma" description="Specialized limb-preservation surgery for soft tissue and bone sarcomas." setCurrentPage={props.setCurrentPage} />;
}

export function HeadNeckCancerPage(props: PageProps) {
  return <ExpertiseTemplate title="Head & Neck Cancer" description="Advanced surgical treatment and reconstruction for head and neck cancers, prioritizing function and appearance." setCurrentPage={props.setCurrentPage} />;
}

export function LaparoscopicSurgeryPage(props: PageProps) {
  return <ExpertiseTemplate title="Laparoscopic Surgery" description="Minimally invasive advanced laparoscopic procedures for faster recovery and reduced pain." setCurrentPage={props.setCurrentPage} />;
}

export function GeneralSurgeryPage(props: PageProps) {
  return <ExpertiseTemplate title="General Surgery" description="Surgical management for hernia, gallstones, benign thyroid & breast disease, and fibroid uterus." setCurrentPage={props.setCurrentPage} />;
}
