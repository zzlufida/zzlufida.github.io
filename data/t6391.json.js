window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6391","name":"HR_PF_SchemaTarget","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_SchemaTarget"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-78043","object_id":"column-78043","name":"uSchemaTargetPK","name_without_path":"uSchemaTargetPK","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78030","object_id":"column-78030","name":"iIndex","name_without_path":"iIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78031","object_id":"column-78031","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6382","name":"HR_PF_Schema","name_show_schema":"dbo.HR_PF_Schema"}]},{"id":"column-78032","object_id":"column-78032","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6401","name":"HR_PF_Target","name_show_schema":"dbo.HR_PF_Target"}]},{"id":"column-78033","object_id":"column-78033","name":"sCheckScoreWay","name_without_path":"sCheckScoreWay","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78034","object_id":"column-78034","name":"cGradeMannerCode","name_without_path":"cGradeMannerCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6340","name":"HR_PF_GradeManner","name_show_schema":"dbo.HR_PF_GradeManner"}]},{"id":"column-78035","object_id":"column-78035","name":"bDecompose","name_without_path":"bDecompose","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78036","object_id":"column-78036","name":"bIsEnd","name_without_path":"bIsEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78037","object_id":"column-78037","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78038","object_id":"column-78038","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78039","object_id":"column-78039","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78040","object_id":"column-78040","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78041","object_id":"column-78041","name":"fTargetClassWeight","name_without_path":"fTargetClassWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78042","object_id":"column-78042","name":"fTargetWeight","name_without_path":"fTargetWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"HR_PF_GradeManner_HR_PF_SchemaTarget_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaTarget","foreign_table_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_verbose":"HR_PF_SchemaTarget","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_object_id":"t6391","primary_table":"HR_PF_GradeManner","primary_table_show_schema":"dbo.HR_PF_GradeManner","primary_table_verbose":"HR_PF_GradeManner","primary_table_verbose_show_schema":"dbo.HR_PF_GradeManner","primary_table_object_id":"t6340","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGradeMannerCode","foreign_column_path":null,"foreign_column":"cGradeMannerCode"}],"custom_fields":{}},{"name":"HR_PF_Schema_HR_PF_SchemaTarget_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaTarget","foreign_table_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_verbose":"HR_PF_SchemaTarget","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_object_id":"t6391","primary_table":"HR_PF_Schema","primary_table_show_schema":"dbo.HR_PF_Schema","primary_table_verbose":"HR_PF_Schema","primary_table_verbose_show_schema":"dbo.HR_PF_Schema","primary_table_object_id":"t6382","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSchemaCode","foreign_column_path":null,"foreign_column":"cSchemaCode"}],"custom_fields":{}},{"name":"HR_PF_Target_HR_PF_SchemaTarget_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaTarget","foreign_table_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_verbose":"HR_PF_SchemaTarget","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_object_id":"t6391","primary_table":"HR_PF_Target","primary_table_show_schema":"dbo.HR_PF_Target","primary_table_verbose":"HR_PF_Target","primary_table_verbose_show_schema":"dbo.HR_PF_Target","primary_table_object_id":"t6401","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cTargetCode","foreign_column_path":null,"foreign_column":"cTargetCode"}],"custom_fields":{}}],"unique_keys":[{"name":"方案指标_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uSchemaTargetPK","name":"uSchemaTargetPK"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};