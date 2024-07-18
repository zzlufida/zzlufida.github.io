window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11230","name":"HR_PF_SchemaActionPlanStructure_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_SchemaActionPlanStructure_View\r\nAS\r\nSELECT \r\n       dbo.HR_PF_SchemaActionPlanStructure.uSchemaActionPlanComposePK,\r\n       dbo.HR_PF_SchemaActionPlanStructure.cSchemaCode,\r\n       HR_PF_Schema.cSchemaName as cSchemaName,\r\n       dbo.HR_PF_SchemaActionPlanStructure.cColumnCode,\r\n       HR_PF_Column.cColumnName as cColumnName,\r\n       dbo.HR_PF_SchemaActionPlanStructure.iXPlace,\r\n       dbo.HR_PF_SchemaActionPlanStructure.tStamp,\r\n       dbo.HR_PF_SchemaActionPlanStructure.cDefine1,\r\n       dbo.HR_PF_SchemaActionPlanStructure.cDefine2,\r\n       dbo.HR_PF_SchemaActionPlanStructure.cDefine3\r\nFROM dbo.HR_PF_SchemaActionPlanStructure with(nolock) \r\nINNER JOIN\r\n       dbo.HR_PF_Schema with(nolock) ON \r\n       dbo.HR_PF_SchemaActionPlanStructure.cSchemaCode = HR_PF_Schema.cSchemaCode\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_Column with(nolock) ON \r\n       dbo.HR_PF_SchemaActionPlanStructure.cColumnCode = HR_PF_Column.cColumnCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_SchemaActionPlanStructure_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223632","object_id":"column-223632","name":"uSchemaActionPlanComposePK","name_without_path":"uSchemaActionPlanComposePK","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223633","object_id":"column-223633","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223634","object_id":"column-223634","name":"cSchemaName","name_without_path":"cSchemaName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223635","object_id":"column-223635","name":"cColumnCode","name_without_path":"cColumnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223636","object_id":"column-223636","name":"cColumnName","name_without_path":"cColumnName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223637","object_id":"column-223637","name":"iXPlace","name_without_path":"iXPlace","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223638","object_id":"column-223638","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223639","object_id":"column-223639","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223640","object_id":"column-223640","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223641","object_id":"column-223641","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};