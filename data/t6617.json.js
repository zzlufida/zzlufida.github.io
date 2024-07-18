window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6617","name":"hr_wa_adjustoptstd","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_wa_adjustoptstd"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-82014","object_id":"column-82014","name":"vadjustoptcode","name_without_path":"vadjustoptcode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-82015","object_id":"column-82015","name":"icountorder","name_without_path":"icountorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-82016","object_id":"column-82016","name":"vslystdcode","name_without_path":"vslystdcode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6629","name":"HR_WA_StdMan","name_show_schema":"dbo.HR_WA_StdMan"}]}],"relations":[{"name":"FK_HR_WA_AD_REFERENCE_HR_WA_ST","title":null,"description":null,"is_user_defined":false,"foreign_table":"hr_wa_adjustoptstd","foreign_table_show_schema":"dbo.hr_wa_adjustoptstd","foreign_table_verbose":"hr_wa_adjustoptstd","foreign_table_verbose_show_schema":"dbo.hr_wa_adjustoptstd","foreign_table_object_id":"t6617","primary_table":"HR_WA_StdMan","primary_table_show_schema":"dbo.HR_WA_StdMan","primary_table_verbose":"HR_WA_StdMan","primary_table_verbose_show_schema":"dbo.HR_WA_StdMan","primary_table_object_id":"t6629","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"vStdcode","foreign_column_path":null,"foreign_column":"vslystdcode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_HR_WA_ADJUSTOPTSTD","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"vadjustoptcode","name":"vadjustoptcode"},{"path":null,"name_without_path":"vslystdcode","name":"vslystdcode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};