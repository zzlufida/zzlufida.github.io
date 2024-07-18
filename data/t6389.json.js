window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6389","name":"HR_PF_SchemaNoteTemplate","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_SchemaNoteTemplate"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-78008","object_id":"column-78008","name":"uSchemaNoteTemplatePK","name_without_path":"uSchemaNoteTemplatePK","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78009","object_id":"column-78009","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6382","name":"HR_PF_Schema","name_show_schema":"dbo.HR_PF_Schema"}]},{"id":"column-78010","object_id":"column-78010","name":"sMsgTemplateType","name_without_path":"sMsgTemplateType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78011","object_id":"column-78011","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6401","name":"HR_PF_Target","name_show_schema":"dbo.HR_PF_Target"}]},{"id":"column-78012","object_id":"column-78012","name":"cColumnCode","name_without_path":"cColumnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6280","name":"HR_PF_Column","name_show_schema":"dbo.HR_PF_Column"}]},{"id":"column-78013","object_id":"column-78013","name":"iRowNumber","name_without_path":"iRowNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78014","object_id":"column-78014","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78015","object_id":"column-78015","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78016","object_id":"column-78016","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78017","object_id":"column-78017","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"HR_PF_Column_HR_PF_SchemaNoteTemplate_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaNoteTemplate","foreign_table_show_schema":"dbo.HR_PF_SchemaNoteTemplate","foreign_table_verbose":"HR_PF_SchemaNoteTemplate","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaNoteTemplate","foreign_table_object_id":"t6389","primary_table":"HR_PF_Column","primary_table_show_schema":"dbo.HR_PF_Column","primary_table_verbose":"HR_PF_Column","primary_table_verbose_show_schema":"dbo.HR_PF_Column","primary_table_object_id":"t6280","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cColumnCode","foreign_column_path":null,"foreign_column":"cColumnCode"}],"custom_fields":{}},{"name":"HR_PF_Schema_HR_PF_SchemaNoteTemplate_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaNoteTemplate","foreign_table_show_schema":"dbo.HR_PF_SchemaNoteTemplate","foreign_table_verbose":"HR_PF_SchemaNoteTemplate","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaNoteTemplate","foreign_table_object_id":"t6389","primary_table":"HR_PF_Schema","primary_table_show_schema":"dbo.HR_PF_Schema","primary_table_verbose":"HR_PF_Schema","primary_table_verbose_show_schema":"dbo.HR_PF_Schema","primary_table_object_id":"t6382","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSchemaCode","foreign_column_path":null,"foreign_column":"cSchemaCode"}],"custom_fields":{}},{"name":"HR_PF_Target_HR_PF_SchemaNoteTemplate_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaNoteTemplate","foreign_table_show_schema":"dbo.HR_PF_SchemaNoteTemplate","foreign_table_verbose":"HR_PF_SchemaNoteTemplate","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaNoteTemplate","foreign_table_object_id":"t6389","primary_table":"HR_PF_Target","primary_table_show_schema":"dbo.HR_PF_Target","primary_table_verbose":"HR_PF_Target","primary_table_verbose_show_schema":"dbo.HR_PF_Target","primary_table_object_id":"t6401","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cTargetCode","foreign_column_path":null,"foreign_column":"cTargetCode"}],"custom_fields":{}}],"unique_keys":[{"name":"考核方案短信模版_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uSchemaNoteTemplatePK","name":"uSchemaNoteTemplatePK"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};