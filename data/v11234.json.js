window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11234","name":"HR_PF_SchemaKey_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_SchemaKey_View\r\nAS\r\nSELECT \r\n       dbo.HR_PF_SchemaKey.uSchemaKeyPK,\r\n       dbo.HR_PF_SchemaKey.cSchemaCode,\r\n       HR_PF_Schema.cSchemaName as cSchemaName,\r\n       dbo.HR_PF_SchemaKey.sTemplateType,\r\n       HR_PF_EnumsTemplateType_view.cEnumName as sTemplateTypeName,\r\n       dbo.HR_PF_SchemaKey.cKey,\r\n       dbo.HR_PF_SchemaKey.iXPlace,\r\n       dbo.HR_PF_SchemaKey.iYPlace,\r\n       dbo.HR_PF_SchemaKey.tStamp,\r\n       dbo.HR_PF_SchemaKey.cDefine1,\r\n       dbo.HR_PF_SchemaKey.cDefine2,\r\n       dbo.HR_PF_SchemaKey.cDefine3\r\nFROM dbo.HR_PF_SchemaKey with(nolock) \r\nINNER JOIN\r\n       dbo.HR_PF_Schema with(nolock) ON \r\n       dbo.HR_PF_SchemaKey.cSchemaCode = HR_PF_Schema.cSchemaCode\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_EnumsTemplateType_view ON \r\n       dbo.HR_PF_SchemaKey.sTemplateType = HR_PF_EnumsTemplateType_view.cEnumID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_SchemaKey_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223679","object_id":"column-223679","name":"uSchemaKeyPK","name_without_path":"uSchemaKeyPK","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223680","object_id":"column-223680","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223681","object_id":"column-223681","name":"cSchemaName","name_without_path":"cSchemaName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223682","object_id":"column-223682","name":"sTemplateType","name_without_path":"sTemplateType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223683","object_id":"column-223683","name":"sTemplateTypeName","name_without_path":"sTemplateTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223684","object_id":"column-223684","name":"cKey","name_without_path":"cKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223685","object_id":"column-223685","name":"iXPlace","name_without_path":"iXPlace","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223686","object_id":"column-223686","name":"iYPlace","name_without_path":"iYPlace","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223687","object_id":"column-223687","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223688","object_id":"column-223688","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223689","object_id":"column-223689","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223690","object_id":"column-223690","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};