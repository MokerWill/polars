var srcIndex = new Map(JSON.parse('[["polars",["",[["docs",[],["eager.rs","lazy.rs","mod.rs"]]],["export.rs","lib.rs","prelude.rs"]]],["polars_core",["",[["chunked_array",[["arithmetic",[],["decimal.rs","mod.rs","numeric.rs"]],["builder",[["list",[],["anonymous.rs","binary.rs","boolean.rs","categorical.rs","dtypes.rs","mod.rs","null.rs","primitive.rs"]]],["boolean.rs","mod.rs","null.rs","primitive.rs","string.rs"]],["comparison",[],["categorical.rs","mod.rs","scalar.rs"]],["iterator",[["par",[],["list.rs","mod.rs","string.rs"]]],["mod.rs"]],["list",[],["iterator.rs","mod.rs"]],["logical",[["categorical",[["ops",[],["append.rs","full.rs","mod.rs","unique.rs","zip.rs"]]],["builder.rs","from.rs","merge.rs","mod.rs","revmap.rs","string_cache.rs"]]],["decimal.rs","mod.rs"]],["metadata",[],["collect.rs","env.rs","guard.rs","interior_mutable.rs","md_trait.rs","mod.rs"]],["object",[["extension",[],["drop.rs","list.rs","mod.rs","polars_extension.rs"]]],["builder.rs","is_valid.rs","iterator.rs","mod.rs","registry.rs"]],["ops",[["aggregate",[],["mod.rs","quantile.rs","var.rs"]],["sort",[],["arg_bottom_k.rs","arg_sort.rs","arg_sort_multiple.rs","categorical.rs","mod.rs","options.rs"]],["unique",[],["mod.rs"]]],["any_value.rs","append.rs","apply.rs","arity.rs","bit_repr.rs","chunkops.rs","compare_inner.rs","decimal.rs","downcast.rs","explode.rs","explode_and_offsets.rs","extend.rs","fill_null.rs","filter.rs","float_sorted_arg_max.rs","for_each.rs","full.rs","gather.rs","min_max_binary.rs","mod.rs","nulls.rs","reverse.rs","rolling_window.rs","search_sorted.rs","set.rs","shift.rs","zip.rs"]],["temporal",[],["conversion.rs","mod.rs"]]],["binary.rs","bitwise.rs","cast.rs","collect.rs","drop.rs","float.rs","from.rs","from_iterator.rs","from_iterator_par.rs","mod.rs","ndarray.rs","random.rs","to_vec.rs","trusted_len.rs"]],["datatypes",[],["aliases.rs","any_value.rs","dtype.rs","field.rs","into_scalar.rs","mod.rs","static_array_collect.rs","time_unit.rs"]],["frame",[["column",[],["arithmetic.rs","mod.rs"]],["group_by",[["aggregations",[],["agg_list.rs","boolean.rs","dispatch.rs","mod.rs","string.rs"]]],["expr.rs","hashing.rs","into_groups.rs","mod.rs","perfect.rs","proxy.rs"]],["row",[],["av_buffer.rs","dataframe.rs","mod.rs","transpose.rs"]]],["arithmetic.rs","chunks.rs","explode.rs","from.rs","horizontal.rs","mod.rs","top_k.rs","upstream_traits.rs"]],["hashing",[],["identity.rs","mod.rs","vector_hasher.rs"]],["scalar",[],["from.rs","mod.rs","reduce.rs"]],["series",[["arithmetic",[],["borrowed.rs","list_borrowed.rs","mod.rs","owned.rs"]],["implementations",[],["binary.rs","binary_offset.rs","boolean.rs","categorical.rs","decimal.rs","floats.rs","list.rs","mod.rs","null.rs","object.rs","string.rs"]],["ops",[],["downcast.rs","extend.rs","mod.rs","null.rs","reshape.rs"]]],["amortized_iter.rs","any_value.rs","comparison.rs","from.rs","into.rs","iterator.rs","mod.rs","series_trait.rs"]],["utils",[],["any_value.rs","flatten.rs","mod.rs","schema.rs","series.rs","supertype.rs"]]],["config.rs","error.rs","export.rs","fmt.rs","functions.rs","lib.rs","named_from.rs","prelude.rs","random.rs","schema.rs","testing.rs"]]],["polars_io",["",[["avro",[],["mod.rs","read.rs","write.rs"]],["cloud",[],["adaptors.rs","glob.rs","mod.rs","object_store_setup.rs","options.rs","polars_object_store.rs"]],["csv",[["read",[["read_impl",[],["batched.rs"]]],["buffer.rs","mod.rs","options.rs","parser.rs","read_impl.rs","reader.rs","schema_inference.rs","splitfields.rs","utils.rs"]],["write",[["write_impl",[],["serializer.rs"]]],["mod.rs","options.rs","write_impl.rs","writer.rs"]]],["mod.rs"]],["file_cache",[],["cache.rs","cache_lock.rs","entry.rs","eviction.rs","file_fetcher.rs","file_lock.rs","metadata.rs","mod.rs","utils.rs"]],["ipc",[],["ipc_file.rs","ipc_reader_async.rs","ipc_stream.rs","mmap.rs","mod.rs","write.rs","write_async.rs"]],["json",[],["infer.rs","mod.rs"]],["ndjson",[],["buffer.rs","core.rs","mod.rs"]],["parquet",[["read",[],["async_impl.rs","mmap.rs","mod.rs","options.rs","predicates.rs","read_impl.rs","reader.rs","to_metadata.rs","utils.rs"]],["write",[],["batched_writer.rs","mod.rs","options.rs","writer.rs"]]],["metadata.rs","mod.rs"]],["path_utils",[],["hugging_face.rs","mod.rs"]],["utils",[],["byte_source.rs","compression.rs","mod.rs","other.rs","slice.rs"]]],["hive.rs","lib.rs","mmap.rs","options.rs","partition.rs","pl_async.rs","predicates.rs","prelude.rs","shared.rs"]]],["polars_lazy",["",[["dsl",[],["eval.rs","functions.rs","into.rs","list.rs","mod.rs"]],["frame",[],["cached_arenas.rs","err.rs","exitable.rs","mod.rs","pivot.rs","python.rs"]],["physical_plan",[["streaming",[],["checks.rs","construct_pipeline.rs","convert_alp.rs","mod.rs","tree.rs"]]],["exotic.rs","mod.rs"]],["scan",[],["anonymous_scan.rs","csv.rs","file_list_reader.rs","ipc.rs","mod.rs","ndjson.rs","parquet.rs"]]],["dot.rs","lib.rs","prelude.rs"]]],["polars_ops",["",[["chunked_array",[["binary",[],["mod.rs","namespace.rs"]],["gather",[],["mod.rs"]],["list",[],["count.rs","dispersion.rs","min_max.rs","mod.rs","namespace.rs","sum_mean.rs"]],["strings",[],["mod.rs"]]],["mod.rs","scatter.rs","sum.rs"]],["frame",[["join",[["hash_join",[],["mod.rs","single_keys.rs","single_keys_dispatch.rs","single_keys_inner.rs","single_keys_left.rs","single_keys_outer.rs","sort_merge.rs"]]],["args.rs","cross_join.rs","dispatch_left_right.rs","general.rs","mod.rs"]]],["mod.rs"]],["series",[["ops",[],["arg_min_max.rs","clip.rs","horizontal.rs","index.rs","int_range.rs","mod.rs","negate.rs","not.rs","various.rs"]]],["mod.rs"]]],["lib.rs","prelude.rs"]]],["polars_sql",["",[],["context.rs","function_registry.rs","functions.rs","keywords.rs","lib.rs","sql_expr.rs","table_functions.rs","types.rs"]]],["polars_time",["",[["chunkedarray",[["string",[],["infer.rs","mod.rs","patterns.rs","strptime.rs"]]],["kernels.rs","mod.rs"]],["group_by",[],["mod.rs"]],["series",[],["mod.rs"]],["windows",[],["bounds.rs","calendar.rs","duration.rs","group_by.rs","mod.rs","window.rs"]]],["date_range.rs","lib.rs","prelude.rs","round.rs","truncate.rs","upsample.rs","utils.rs"]]],["polars_utils",["",[["itertools",[],["enumerate_idx.rs","mod.rs"]]],["abs_diff.rs","aliases.rs","arena.rs","atomic.rs","binary_search.rs","cache.rs","cell.rs","clmul.rs","contention_pool.rs","cpuid.rs","error.rs","fixedringbuffer.rs","float.rs","floor_divmod.rs","fmt.rs","functions.rs","hashing.rs","idx_vec.rs","index.rs","io.rs","lib.rs","macros.rs","mem.rs","min_max.rs","mmap.rs","nulls.rs","ord.rs","partitioned.rs","pl_str.rs","priority.rs","slice.rs","sort.rs","sync.rs","sys.rs","total_ord.rs","unwrap.rs","vec.rs"]]]]'));
createSrcSidebar();
//{"start":36,"fragment_lengths":[97,3012,1278,454,695,145,364,528]}