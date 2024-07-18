window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4586","name":"CM_ClauseClass","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_ClauseClass"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-46153","object_id":"column-46153","name":"cClassCode","name_without_path":"cClassCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-46154","object_id":"column-46154","name":"cClassName","name_without_path":"cClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-46155","object_id":"column-46155","name":"cRemark","name_without_path":"cRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-46156","object_id":"column-46156","name":"cParentKey","name_without_path":"cParentKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"13","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_CM_CLAUS_REFERENCE_CM_CLAUS","title":null,"description":null,"is_user_defined":false,"foreign_table":"CM_Clause","foreign_table_show_schema":"dbo.CM_Clause","foreign_table_verbose":"CM_Clause","foreign_table_verbose_show_schema":"dbo.CM_Clause","foreign_table_object_id":"t4585","primary_table":"CM_ClauseClass","primary_table_show_schema":"dbo.CM_ClauseClass","primary_table_verbose":"CM_ClauseClass","primary_table_verbose_show_schema":"dbo.CM_ClauseClass","primary_table_object_id":"t4586","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cClassCode","foreign_column_path":null,"foreign_column":"cClassCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_CM_CLAUSECLASS","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cClassCode","name":"cClassCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};