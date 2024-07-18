window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11237","name":"HR_PF_SchemaTarget_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.HR_PF_SchemaTarget_View\r\nAS\r\nSELECT \r\n       dbo.HR_PF_SchemaTarget.uSchemaTargetPK,\r\n       dbo.HR_PF_SchemaTarget.iIndex,\r\n       dbo.HR_PF_SchemaTarget.cSchemaCode,\r\n       HR_PF_Schema.cSchemaName as cSchemaName,\r\n       dbo.HR_PF_SchemaTarget.cTargetCode,\r\n       HR_PF_Target.cTargetName as cTargetName,\r\n       HR_PF_Target.cCheckStandard as cCheckStandard,\r\n       HR_PF_Target.cTargetExplain as cTargetExplain,\r\n       HR_PF_Target.cTargetClassCode as cTargetClassCode,\r\n       HR_PF_TargetClass.cTargetClassName as cTargetClassName,\r\n       dbo.HR_PF_SchemaTarget.sCheckScoreWay,\r\n       HR_PF_EnumsCheckScoreWay_view.cEnumName as sCheckScoreWayName,\r\n       dbo.HR_PF_SchemaTarget.cGradeMannerCode,\r\n       HR_PF_GradeManner.cGradeMannerName as cGradeMannerName,\r\n       dbo.HR_PF_SchemaTarget.bDecompose,\r\n       dbo.HR_PF_SchemaTarget.bIsEnd,\r\n       dbo.HR_PF_SchemaTarget.fTargetClassWeight,\r\n       dbo.HR_PF_SchemaTarget.fTargetWeight,\r\n       dbo.HR_PF_SchemaTarget.tStamp,\r\n       dbo.HR_PF_SchemaTarget.cDefine1,\r\n       dbo.HR_PF_SchemaTarget.cDefine2,\r\n       dbo.HR_PF_SchemaTarget.cDefine3\r\nFROM dbo.HR_PF_SchemaTarget \r\nINNER JOIN\r\n       dbo.HR_PF_Schema ON \r\n       dbo.HR_PF_SchemaTarget.cSchemaCode = HR_PF_Schema.cSchemaCode\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_Target ON \r\n       dbo.HR_PF_SchemaTarget.cTargetCode = HR_PF_Target.cTargetCode\r\ninner join  HR_PF_TargetClass On\r\n\tHR_PF_Target.cTargetClassCode=HR_PF_TargetClass.cTargetClassCode\r\nINNER JOIN\r\n       dbo.HR_PF_EnumsCheckScoreWay_view ON \r\n       dbo.HR_PF_SchemaTarget.sCheckScoreWay = HR_PF_EnumsCheckScoreWay_view.cEnumID\r\n \r\nINNER JOIN\r\n       dbo.HR_PF_GradeManner ON \r\n       dbo.HR_PF_SchemaTarget.cGradeMannerCode = HR_PF_GradeManner.cGradeMannerCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_SchemaTarget_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223721","object_id":"column-223721","name":"uSchemaTargetPK","name_without_path":"uSchemaTargetPK","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223722","object_id":"column-223722","name":"iIndex","name_without_path":"iIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223723","object_id":"column-223723","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223724","object_id":"column-223724","name":"cSchemaName","name_without_path":"cSchemaName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223725","object_id":"column-223725","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223726","object_id":"column-223726","name":"cTargetName","name_without_path":"cTargetName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223727","object_id":"column-223727","name":"cCheckStandard","name_without_path":"cCheckStandard","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223728","object_id":"column-223728","name":"cTargetExplain","name_without_path":"cTargetExplain","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223729","object_id":"column-223729","name":"cTargetClassCode","name_without_path":"cTargetClassCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223730","object_id":"column-223730","name":"cTargetClassName","name_without_path":"cTargetClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223731","object_id":"column-223731","name":"sCheckScoreWay","name_without_path":"sCheckScoreWay","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223732","object_id":"column-223732","name":"sCheckScoreWayName","name_without_path":"sCheckScoreWayName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223733","object_id":"column-223733","name":"cGradeMannerCode","name_without_path":"cGradeMannerCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223734","object_id":"column-223734","name":"cGradeMannerName","name_without_path":"cGradeMannerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223735","object_id":"column-223735","name":"bDecompose","name_without_path":"bDecompose","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223736","object_id":"column-223736","name":"bIsEnd","name_without_path":"bIsEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223737","object_id":"column-223737","name":"fTargetClassWeight","name_without_path":"fTargetClassWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223738","object_id":"column-223738","name":"fTargetWeight","name_without_path":"fTargetWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223739","object_id":"column-223739","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223740","object_id":"column-223740","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223741","object_id":"column-223741","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223742","object_id":"column-223742","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};