window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4157","name":"bom_parent (BOM母件资料)","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"bom_parent"},{"field":"Type","value":"Table"},{"field":"Title","value":"BOM母件资料"},{"field":"Module","value":[{"_type":"link","name":"物料清单BOM","id":"m114"}]}],"columns":[{"id":"column-41639","object_id":"column-41639","name":"AutoId (主键)","name_without_path":"AutoId (主键)","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41640","object_id":"column-41640","name":"BomId (BOM母件资料ID)","name_without_path":"BomId (BOM母件资料ID)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4128","name":"bom_bom (BOM资料)","name_show_schema":"dbo.bom_bom (BOM资料)"}]},{"id":"column-41641","object_id":"column-41641","name":"ParentId (母件物料Id)","name_without_path":"ParentId (母件物料Id)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3947","name":"bas_part (物料表)","name_show_schema":"dbo.bas_part (物料表)"}]},{"id":"column-41642","object_id":"column-41642","name":"ParentScrap (母件损耗率)","name_without_path":"ParentScrap (母件损耗率)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_Rate: decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_Rate\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41643","object_id":"column-41643","name":"SharingPartId (被公用物料ID)","name_without_path":"SharingPartId (被公用物料ID)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41644","object_id":"column-41644","name":"Ufts (Ufts 时间梭)","name_without_path":"Ufts (Ufts 时间梭)","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_bas_part_bom_parent","title":"","description":"","is_user_defined":true,"foreign_table":"bom_parent","foreign_table_show_schema":"dbo.bom_parent","foreign_table_verbose":"bom_parent (BOM母件资料)","foreign_table_verbose_show_schema":"dbo.bom_parent (BOM母件资料)","foreign_table_object_id":"t4157","primary_table":"bas_part","primary_table_show_schema":"dbo.bas_part","primary_table_verbose":"bas_part (物料表)","primary_table_verbose_show_schema":"dbo.bas_part (物料表)","primary_table_object_id":"t3947","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"PartId","foreign_column_path":null,"foreign_column":"ParentId"}],"custom_fields":{}},{"name":"fk_bom_bom_bom_parent","title":"","description":"","is_user_defined":true,"foreign_table":"bom_parent","foreign_table_show_schema":"dbo.bom_parent","foreign_table_verbose":"bom_parent (BOM母件资料)","foreign_table_verbose_show_schema":"dbo.bom_parent (BOM母件资料)","foreign_table_object_id":"t4157","primary_table":"bom_bom","primary_table_show_schema":"dbo.bom_bom","primary_table_verbose":"bom_bom (BOM资料)","primary_table_verbose_show_schema":"dbo.bom_bom (BOM资料)","primary_table_object_id":"t4128","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"BomId","foreign_column_path":null,"foreign_column":"BomId"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_bom_parent","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"AutoId (主键)","name":"AutoId (主键)"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};