// Generated from tools/benchmark-analyzer/src/run_types.rs
// Do not edit manually - regenerated on each benchmark run
//
// These types match the run-v1.json schema produced by benchmark-analyzer

/**
 * Top-level run.json structure (run-v1 schema)
 */
export interface RunJson {
  /**
   * Schema version identifier (may be absent in old schema)
   */
  schema?: string;
  /**
   * Run metadata
   */
  run: RunMeta;
  /**
   * Default display settings (may be absent in old schema)
   */
  defaults?: RunDefaults;
  /**
   * Catalog of groups, benchmarks, targets, metrics (may be absent in old schema)
   */
  catalog?: RunCatalog;
  /**
   * Benchmark results
   */
  results: RunResults;
}

/**
 * Results section
 */
export interface RunResults {
  /**
   * Benchmark results: benchmark_name -> BenchmarkOps
   */
  values: Record<string, BenchmarkOps>;
  /**
   * Errors section (parse failures, etc.)
   */
  errors: RunErrors;
}

/**
 * Errors section
 */
export interface RunErrors {
  /**
   * Parse failures grouped by tool
   */
  _parse_failures?: ParseFailures;
}

/**
 * Parse failures by tool
 */
export interface ParseFailures {
  divan: string[];
  gungraun: string[];
}

/**
 * Operations for a benchmark (deserialize/serialize)
 */
export interface BenchmarkOps {
  /**
   * Deserialization results by target
   */
  deserialize: Record<string, TargetMetrics | null>;
  /**
   * Serialization results by target
   */
  serialize: Record<string, TargetMetrics | null>;
}

/**
 * Metrics for a single target
 */
export interface TargetMetrics {
  /**
   * Instruction count (primary metric, from gungraun)
   */
  instructions?: number;
  /**
   * Estimated CPU cycles (from gungraun)
   */
  estimated_cycles?: number;
  /**
   * Median time in nanoseconds (from divan)
   */
  time_median_ns?: number;
  /**
   * L1 cache hits (from gungraun)
   */
  l1_hits?: number;
  /**
   * Last-level cache hits (from gungraun)
   */
  ll_hits?: number;
  /**
   * RAM hits (from gungraun)
   */
  ram_hits?: number;
  /**
   * Total read/write operations (from gungraun)
   */
  total_read_write?: number;
  /**
   * JIT tier tracking: Tier-2 attempts (for format+jit2 target)
   */
  tier2_attempts?: number;
  /**
   * JIT tier tracking: Tier-2 successes (for format+jit2 target)
   */
  tier2_successes?: number;
  /**
   * JIT tier tracking: Tier-2 compile unsupported (for format+jit2 target)
   */
  tier2_compile_unsupported?: number;
  /**
   * JIT tier tracking: Tier-2 runtime unsupported (for format+jit2 target)
   */
  tier2_runtime_unsupported?: number;
  /**
   * JIT tier tracking: Tier-2 runtime error (for format+jit2 target)
   */
  tier2_runtime_error?: number;
  /**
   * JIT tier tracking: Tier-1 fallbacks (for format+jit2 target)
   */
  tier1_fallbacks?: number;
}

/**
 * Catalog of benchmark metadata
 */
export interface RunCatalog {
  /**
   * Order of formats (e.g., ["json", "postcard"])
   */
  formats_order: string[];
  /**
   * Format definitions
   */
  formats: Record<string, FormatDef>;
  /**
   * Order of groups
   */
  groups_order: string[];
  /**
   * Group definitions (IndexMap preserves insertion order for JSON)
   */
  groups: Record<string, GroupDef>;
  /**
   * Benchmark definitions (IndexMap preserves insertion order for JSON)
   */
  benchmarks: Record<string, BenchmarkDef>;
  /**
   * Target definitions (IndexMap preserves insertion order for JSON)
   */
  targets: Record<string, TargetDef>;
  /**
   * Metric definitions (IndexMap preserves insertion order for JSON)
   */
  metrics: Record<string, MetricDef>;
}

/**
 * Metric definition
 */
export interface MetricDef {
  key: string;
  label: string;
  unit: string;
  better: string;
}

/**
 * Target definition
 */
export interface TargetDef {
  key: string;
  label: string;
  kind: string;
}

/**
 * Benchmark definition
 */
export interface BenchmarkDef {
  key: string;
  label: string;
  group: string;
  /**
   * Format this benchmark belongs to (e.g., "json", "postcard")
   */
  format: string;
  targets_order: string[];
  metrics_order: string[];
}

/**
 * Group definition
 */
export interface GroupDef {
  label: string;
  benchmarks_order: string[];
}

/**
 * Format definition (e.g., JSON, Postcard)
 */
export interface FormatDef {
  key: string;
  label: string;
  /**
   * Baseline target for this format (e.g., "serde_json" for JSON)
   */
  baseline_target: string;
  /**
   * Primary facet target for this format (e.g., "facet_json_t2" for JSON)
   */
  primary_target: string;
}

/**
 * Default display settings
 */
export interface RunDefaults {
  operation: string;
  metric: string;
  baseline_target: string;
  primary_target: string;
  comparison_mode: string;
}

/**
 * Run metadata
 */
export interface RunMeta {
  /**
   * Unique run identifier (e.g., "main/3a63f78f")
   */
  run_id: string;
  /**
   * URL-safe branch key (e.g., "main", "bench-improvements")
   */
  branch_key: string;
  /**
   * Original branch name if different from branch_key
   */
  branch_original?: string;
  /**
   * Full commit SHA (new schema)
   */
  sha?: string;
  /**
   * Full commit SHA (old schema, for backward compat)
   */
  commit?: string;
  /**
   * Short commit SHA (new schema)
   */
  short?: string;
  /**
   * Short commit SHA (old schema, for backward compat)
   */
  commit_short?: string;
  /**
   * ISO 8601 timestamp (new schema)
   */
  timestamp?: string;
  /**
   * ISO 8601 timestamp (old schema, for backward compat)
   */
  generated_at?: string;
  /**
   * Unix timestamp
   */
  timestamp_unix?: number;
  /**
   * Commit message
   */
  commit_message: string;
  /**
   * PR number if applicable
   */
  pr_number?: string;
  /**
   * PR title if applicable
   */
  pr_title?: string;
  /**
   * Tool versions used
   */
  tool_versions?: ToolVersions;
}

/**
 * Tool versions
 */
export interface ToolVersions {
  divan: string;
  gungraun: string;
}

