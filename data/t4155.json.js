window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4155","name":"bom_opcomponentsub (BOM子件替代料)","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"bom_opcomponentsub"},{"field":"Type","value":"Table"},{"field":"Title","value":"BOM子件替代料"},{"field":"Module","value":[{"_type":"link","name":"物料清单BOM","id":"m114"}]}],"columns":[{"id":"column-41607","object_id":"column-41607","name":"ComponentSubId (子件替代ID 主键ID 自增量)","name_without_path":"ComponentSubId (子件替代ID 主键ID 自增量)","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41608","object_id":"column-41608","name":"OpComponentId (子件Id)","name_without_path":"OpComponentId (子件Id)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4149","name":"bom_opcomponent (BOM子件资料)","name_show_schema":"dbo.bom_opcomponent (BOM子件资料)"}]},{"id":"column-41609","object_id":"column-41609","name":"Sequence (替代序号)","name_without_path":"Sequence (替代序号)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41610","object_id":"column-41610","name":"PartId (料品Id)","name_without_path":"PartId (料品Id)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3947","name":"bas_part (物料表)","name_show_schema":"dbo.bas_part (物料表)"}]},{"id":"column-41611","object_id":"column-41611","name":"Factor (替代比例)","name_without_path":"Factor (替代比例)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_QTY\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41612","object_id":"column-41612","name":"EffBegDate (生效日期)","name_without_path":"EffBegDate (生效日期)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41613","object_id":"column-41613","name":"EffEndDate (失效日期)","name_without_path":"EffEndDate (失效日期)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41614","object_id":"column-41614","name":"ReplaceFlag (是否替换料)","name_without_path":"ReplaceFlag (是否替换料)","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41615","object_id":"column-41615","name":"Ufts (时间梭)","name_without_path":"Ufts (时间梭)","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41616","object_id":"column-41616","name":"VTid (模板号)","name_without_path":"VTid (模板号)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41617","object_id":"column-41617","name":"Define22 (表体自定义项1)","name_without_path":"Define22 (表体自定义项1)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41618","object_id":"column-41618","name":"Define23 (表体自定义项2)","name_without_path":"Define23 (表体自定义项2)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41619","object_id":"column-41619","name":"Define24 (表体自定义项3)","name_without_path":"Define24 (表体自定义项3)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41620","object_id":"column-41620","name":"Define25 (表体自定义项4)","name_without_path":"Define25 (表体自定义项4)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41621","object_id":"column-41621","name":"Define26 (表体自定义项5)","name_without_path":"Define26 (表体自定义项5)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41622","object_id":"column-41622","name":"Define27 (表体自定义项6)","name_without_path":"Define27 (表体自定义项6)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41623","object_id":"column-41623","name":"Define28 (表体自定义项7)","name_without_path":"Define28 (表体自定义项7)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41624","object_id":"column-41624","name":"Define29 (表体自定义项8)","name_without_path":"Define29 (表体自定义项8)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41625","object_id":"column-41625","name":"Define30 (表体自定义项9)","name_without_path":"Define30 (表体自定义项9)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41626","object_id":"column-41626","name":"Define31 (表体自定义项10)","name_without_path":"Define31 (表体自定义项10)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41627","object_id":"column-41627","name":"Define32 (表体自定义项11)","name_without_path":"Define32 (表体自定义项11)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41628","object_id":"column-41628","name":"Define33 (表体自定义项12)","name_without_path":"Define33 (表体自定义项12)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41629","object_id":"column-41629","name":"Define34 (表体自定义项13)","name_without_path":"Define34 (表体自定义项13)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41630","object_id":"column-41630","name":"Define35 (表体自定义项14)","name_without_path":"Define35 (表体自定义项14)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41631","object_id":"column-41631","name":"Define36 (表体自定义项15)","name_without_path":"Define36 (表体自定义项15)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41632","object_id":"column-41632","name":"Define37 (表体自定义项16)","name_without_path":"Define37 (表体自定义项16)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_bas_part_bom_opcomponentsub","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponentsub","foreign_table_show_schema":"dbo.bom_opcomponentsub","foreign_table_verbose":"bom_opcomponentsub (BOM子件替代料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentsub (BOM子件替代料)","foreign_table_object_id":"t4155","primary_table":"bas_part","primary_table_show_schema":"dbo.bas_part","primary_table_verbose":"bas_part (物料表)","primary_table_verbose_show_schema":"dbo.bas_part (物料表)","primary_table_object_id":"t3947","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"PartId","foreign_column_path":null,"foreign_column":"PartId"}],"custom_fields":{}},{"name":"FK_bom_opcomponentsub","title":null,"description":null,"is_user_defined":false,"foreign_table":"bom_opcomponentsub","foreign_table_show_schema":"dbo.bom_opcomponentsub","foreign_table_verbose":"bom_opcomponentsub (BOM子件替代料)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentsub (BOM子件替代料)","foreign_table_object_id":"t4155","primary_table":"bom_opcomponent","primary_table_show_schema":"dbo.bom_opcomponent","primary_table_verbose":"bom_opcomponent (BOM子件资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","primary_table_object_id":"t4149","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OpComponentId","foreign_column_path":null,"foreign_column":"OpComponentId"}],"custom_fields":{}}],"unique_keys":[{"name":"pk_bom_opcomponentsub","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ComponentSubId (子件替代ID 主键ID 自增量)","name":"ComponentSubId (子件替代ID 主键ID 自增量)"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};