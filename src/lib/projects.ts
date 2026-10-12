import type { ImageMetadata } from 'astro';
import type { Method } from './publications';
import mhvTree from '../assets/figures/mhv-tree.png';
import prChsh from '../assets/figures/pr-chsh.png';
import fqSetup from '../assets/figures/fq-setup.png';
import bsSetup from '../assets/figures/bs-setup.png';
import msEntropy from '../assets/figures/ms-entropy-l800.png';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  field: string;
  method: Method;
  publication?: string;
  thesis?: string;
  period: string;
  image: ImageMetadata;
  imageAlt: string;
  caption: string;
}

export const methodLabel: Record<Method, string> = {
  experimental: 'Experimental',
  theory: 'Theory',
  computational: 'Computational',
};

export const methodGlyph: Record<Method, string> = {
  experimental: '●',
  theory: '○',
  computational: '◐',
};

export const projects: Project[] = [
  {
    slug: 'mhv-quantum-walks',
    title: 'Scattering amplitudes as quantum walks',
    summary:
      'Color-ordered MHV gluon amplitudes represented as coined quantum walks on permutation trees, where each root-to-leaf path is one color ordering.',
    field: 'Quantum walks, quantum algorithms for field theory',
    method: 'theory',
    publication: 'mhv-quantum-walks',
    period: 'Preprint, 2026',
    image: mhvTree,
    imageAlt: 'Directed permutation tree rooted at (1), branching to the six orderings of gluons 2, 3 and 4.',
    caption: 'Directed permutation tree for four gluons. Fig. 1 of arXiv:2607.02456.',
  },
  {
    slug: 'pr-box-simulation',
    title: 'Simulating PR-box correlations without signalling',
    summary:
      'A four-qubit photonic circuit that reproduces Popescu–Rohrlich correlations using a resource that cannot be used to signal.',
    field: 'Quantum foundations, nonlocality',
    method: 'experimental',
    publication: 'pr-box-simulation',
    period: 'Preprint, 2025',
    image: prChsh,
    imageAlt: 'Three panels of CHSH values: bar charts by measurement basis and a curve of S against basis angle.',
    caption: 'Measured and simulated CHSH values. Fig. 3 of arXiv:2509.26271.',
  },
  {
    slug: 'four-qubit-qrng',
    title: 'Publicly verifiable randomness from four photonic qubits',
    summary:
      'Polarization- and path-entangled photon pairs prepare a four-qubit state whose outcomes can be checked in public while two bit strings stay secret.',
    field: 'Photonic quantum cryptography',
    method: 'experimental',
    publication: 'four-qubit-qrng',
    period: 'Published 2024',
    image: fqSetup,
    imageAlt: 'Optical layout: 405 nm laser, PPKTP crystal and two measurement units with beam splitters and detectors.',
    caption: 'Experimental setup. Fig. 3 of Phys. Rev. A 110, 032615 (2024).',
  },
  {
    slug: 'entangled-photon-source',
    title: 'Certifying randomness with an entangled-photon source',
    summary:
      'Characterising a Type-II PPKTP polarization-entangled source with a Bell test, visibility curves and tomography, then using it to generate random bits.',
    field: 'Quantum optics',
    method: 'experimental',
    thesis: 'bs-thesis',
    period: 'Sep 2023 – Apr 2024',
    image: bsSetup,
    imageAlt: 'Schematic of the polarization-entangled photon source and detection arms.',
    caption: 'Experimental setup. Figure 5.1 of the BS thesis.',
  },
  {
    slug: 'monitored-fermions',
    title: 'Free fermions under continuous measurement',
    summary:
      'Quantum-trajectory simulations of a fermion chain under weak monitoring, tracking entanglement, correlations and response as measurement strength grows.',
    field: 'Open quantum many-body dynamics',
    method: 'computational',
    thesis: 'ms-thesis',
    period: 'Sep 2024 – Apr 2025',
    image: msEntropy,
    imageAlt: 'Entanglement entropy against chord length for a range of measurement strengths.',
    caption: 'Entanglement entropy for L = 800, 50 trajectories. Figure 2.2 of the MS thesis.',
  },
];

export const otherWork = [
  {
    title: 'Variational and sample-based quantum simulation for chemistry',
    detail:
      'Quantum chemistry pipeline in PySCF and Qiskit Nature with ACP-corrected Hamiltonians for noncovalent systems; VQE with a UCCSD ansatz and sample-based quantum diagonalization, benchmarked against SCF and exact diagonalization.',
    setting: 'With Viki Kumar Prasad, University of Calgary',
    period: 'Sep – Dec 2025',
  },
  {
    title: 'Quantum walks in spin Hamiltonians',
    detail: 'Simulations of quantum walks in XXZ and transverse-field Ising chains to study lattice dynamics.',
    setting: 'Quantum Optics & Quantum Information Lab, IISc',
    period: '2025–',
  },
  {
    title: 'Quantum tokenized signatures',
    detail: 'Ongoing work on a quantum tokenized signature scheme.',
    setting: 'Quantum Optics & Quantum Information Lab, IISc',
    period: 'Ongoing',
  },
  {
    title: 'Diagnostics and data processing for the STOR-M tokamak',
    detail:
      'Interactive analysis code for plasma discharges recorded across several oscilloscopes; changes to legacy MDSPlus archiving programs in MATLAB and a Python GUI for fluctuation-signal analysis.',
    setting: 'Mitacs Globalink, with Chijin Xiao, University of Saskatchewan',
    period: 'May – Jul 2023',
  },
  {
    title: 'Single-molecule localisation microscopy',
    detail: 'Studied super-resolution optical microscopy and methods for resolving structure below the diffraction limit.',
    setting: 'With Partha Pratim Mondal, IISc',
    period: 'Aug – Oct 2023',
  },
];

// Machine-learning projects. Results are the values printed in the saved notebook outputs
// (AI_ML_Projects, verified 2026-10-12); each links to its public repository.
export interface MlProject {
  title: string;
  summary: string;
  stack: string;
  result?: string;
  repo: string;
}

const gh = 'https://github.com/anirudhverma33';

export const mlProjects: MlProject[] = [
  {
    title: 'Dialogue summarisation with a fine-tuned T5',
    summary:
      'Fine-tuned t5-small on SAMSum chat dialogues with the Hugging Face Trainer and served it as a FastAPI web app with beam-search decoding.',
    stack: 'PyTorch, Hugging Face Transformers, FastAPI',
    result: 'Validation loss 0.381 → 0.350 over 6 epochs (4,000 training dialogues)',
    repo: `${gh}/t5-text-summarizer`,
  },
  {
    title: 'Retrieval-augmented generation over PDFs',
    summary:
      'Loads and chunks PDFs, embeds the chunks into a persistent vector store, retrieves the top matches for a query and passes them as context to an LLM.',
    stack: 'LangChain, sentence-transformers, ChromaDB, Groq LLM',
    repo: `${gh}/rag-pipeline`,
  },
  {
    title: 'Neural networks in PyTorch',
    summary:
      'Feed-forward networks for date-fruit classification and power-plant output regression, a CNN on CIFAR-10 and an RNN for IMDB review sentiment.',
    stack: 'PyTorch, torchvision, NLTK',
    result: 'Test accuracy 95.6% (ANN), 72.5% (CIFAR-10 CNN), 85.2% (RNN); R² 0.935 (ANN regression)',
    repo: `${gh}/ml-projects/tree/main/Deep%20Learning`,
  },
  {
    title: 'Supervised learning projects',
    summary:
      'End-to-end classification pipelines for loan approval, health risk and purchase intent: preprocessing, feature engineering, model comparison and tuning.',
    stack: 'scikit-learn, Pandas',
    result: 'Random Forest 93.8% accuracy (health risk); logistic regression F1 0.81 (loan approval)',
    repo: `${gh}/ml-projects`,
  },
  {
    title: 'Machine learning from scratch',
    summary:
      'KNN classification and regression, linear regression by gradient descent and least squares, and logistic regression, written in NumPy.',
    stack: 'NumPy',
    repo: `${gh}/ml-projects/tree/main/Scratch%20Implementation`,
  },
];

export function getProject(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project ${slug}`);
  return p;
}

export function neighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return { prev: projects[i - 1], next: projects[i + 1] };
}
