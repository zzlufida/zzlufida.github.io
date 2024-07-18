window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4933","name":"EA_Position","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EA_Position"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-52515","object_id":"column-52515","name":"EAP_ID","name_without_path":"EAP_ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52516","object_id":"column-52516","name":"EAF_ID","name_without_path":"EAF_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"42","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4929","name":"EA_Flow","name_show_schema":"dbo.EA_Flow"}]},{"id":"column-52517","object_id":"column-52517","name":"EAP_Name","name_without_path":"EAP_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52518","object_id":"column-52518","name":"Serial_NO","name_without_path":"Serial_NO","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52519","object_id":"column-52519","name":"EAP_Flag","name_without_path":"EAP_Flag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52520","object_id":"column-52520","name":"BackLevelNo","name_without_path":"BackLevelNo","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_EAPEAF_EAFID","title":null,"description":null,"is_user_defined":false,"foreign_table":"EA_Position","foreign_table_show_schema":"dbo.EA_Position","foreign_table_verbose":"EA_Position","foreign_table_verbose_show_schema":"dbo.EA_Position","foreign_table_object_id":"t4933","primary_table":"EA_Flow","primary_table_show_schema":"dbo.EA_Flow","primary_table_verbose":"EA_Flow","primary_table_verbose_show_schema":"dbo.EA_Flow","primary_table_object_id":"t4929","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EAF_ID","foreign_column_path":null,"foreign_column":"EAF_ID"}],"custom_fields":{}},{"name":"FK_EAAEAP_EAPID","title":null,"description":null,"is_user_defined":false,"foreign_table":"EA_AuditPerson","foreign_table_show_schema":"dbo.EA_AuditPerson","foreign_table_verbose":"EA_AuditPerson","foreign_table_verbose_show_schema":"dbo.EA_AuditPerson","foreign_table_object_id":"t4927","primary_table":"EA_Position","primary_table_show_schema":"dbo.EA_Position","primary_table_verbose":"EA_Position","primary_table_verbose_show_schema":"dbo.EA_Position","primary_table_object_id":"t4933","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EAP_ID","foreign_column_path":null,"foreign_column":"EAP_ID"}],"custom_fields":{}},{"name":"FK_EANEAP_EAPID","title":null,"description":null,"is_user_defined":false,"foreign_table":"EA_NotifyPerson","foreign_table_show_schema":"dbo.EA_NotifyPerson","foreign_table_verbose":"EA_NotifyPerson","foreign_table_verbose_show_schema":"dbo.EA_NotifyPerson","foreign_table_object_id":"t4931","primary_table":"EA_Position","primary_table_show_schema":"dbo.EA_Position","primary_table_verbose":"EA_Position","primary_table_verbose_show_schema":"dbo.EA_Position","primary_table_object_id":"t4933","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EAP_ID","foreign_column_path":null,"foreign_column":"EAP_ID"}],"custom_fields":{}},{"name":"FK_EAPCEAP_EAPID","title":null,"description":null,"is_user_defined":false,"foreign_table":"EA_Position_Constraint","foreign_table_show_schema":"dbo.EA_Position_Constraint","foreign_table_verbose":"EA_Position_Constraint","foreign_table_verbose_show_schema":"dbo.EA_Position_Constraint","foreign_table_object_id":"t4934","primary_table":"EA_Position","primary_table_show_schema":"dbo.EA_Position","primary_table_verbose":"EA_Position","primary_table_verbose_show_schema":"dbo.EA_Position","primary_table_object_id":"t4933","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EAP_ID","foreign_column_path":null,"foreign_column":"EAP_ID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_EAPID","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"EAP_ID","name":"EAP_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};