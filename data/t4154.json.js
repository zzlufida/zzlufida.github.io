window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4154","name":"bom_opcomponentscrap (BOM子件的阶梯损耗率)","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"bom_opcomponentscrap"},{"field":"Type","value":"Table"},{"field":"Title","value":"BOM子件的阶梯损耗率"},{"field":"Module","value":[{"_type":"link","name":"物料清单BOM","id":"m114"}]}],"columns":[{"id":"column-41599","object_id":"column-41599","name":"OpComponentScrapId (主键)","name_without_path":"OpComponentScrapId (主键)","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41600","object_id":"column-41600","name":"OpComponentId (Bom子件表ID)","name_without_path":"OpComponentId (Bom子件表ID)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4149","name":"bom_opcomponent (BOM子件资料)","name_show_schema":"dbo.bom_opcomponent (BOM子件资料)"}]},{"id":"column-41601","object_id":"column-41601","name":"SortSeq (行号)","name_without_path":"SortSeq (行号)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41602","object_id":"column-41602","name":"FromQty (起始数量)","name_without_path":"FromQty (起始数量)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_QTY\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41603","object_id":"column-41603","name":"ToQty (结束数量)","name_without_path":"ToQty (结束数量)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_QTY\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41604","object_id":"column-41604","name":"CompScrap (阶梯损耗率)","name_without_path":"CompScrap (阶梯损耗率)","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_Rate: decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_Rate\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41605","object_id":"column-41605","name":"DefaultFlag (是否默认损耗率)","name_without_path":"DefaultFlag (是否默认损耗率)","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41606","object_id":"column-41606","name":"Ufts (时间梭)","name_without_path":"Ufts (时间梭)","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_bom_opcomponent_bom_opcomponentscrap","title":"","description":"","is_user_defined":true,"foreign_table":"bom_opcomponentscrap","foreign_table_show_schema":"dbo.bom_opcomponentscrap","foreign_table_verbose":"bom_opcomponentscrap (BOM子件的阶梯损耗率)","foreign_table_verbose_show_schema":"dbo.bom_opcomponentscrap (BOM子件的阶梯损耗率)","foreign_table_object_id":"t4154","primary_table":"bom_opcomponent","primary_table_show_schema":"dbo.bom_opcomponent","primary_table_verbose":"bom_opcomponent (BOM子件资料)","primary_table_verbose_show_schema":"dbo.bom_opcomponent (BOM子件资料)","primary_table_object_id":"t4149","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"OpComponentId","foreign_column_path":null,"foreign_column":"OpComponentId"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_bom_opcomponentscrap","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"OpComponentScrapId (主键)","name":"OpComponentScrapId (主键)"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};