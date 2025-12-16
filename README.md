# perf.facet.rs

This repository hosts performance benchmarking data for the [Facet](https://github.com/facet-rs/facet) project. It serves as the data backend for the GitHub Pages site at https://perf.facet.rs.

## Purpose

`perf.facet.rs` automatically publishes benchmark reports from the Facet project's CI pipeline on every push. The site provides:

- **Performance tracking**: Serialization and deserialization benchmarks across different data formats
- **Historical data**: Per-branch and per-commit performance metrics over time
- **Comparative analysis**: Navigation between serialization and deserialization results
- **Auto-generated indexes**: Organized listings of all branches and commits

## Repository Structure

This repository stores:
- Timestamped benchmark reports
- Raw benchmark data files
- Auto-generated index pages

The CI automatically pushes new benchmark results here, maintaining a historical record of the Facet project's performance across development branches and commits.

## Related

- **Main Project**: https://github.com/facet-rs/facet
- **Related PR**: https://github.com/facet-rs/facet/pull/1317 (Automated benchmark publishing feature)
