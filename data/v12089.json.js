window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12089","name":"QmChartProject","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.QmChartProject\r\nAS\r\nSELECT cChartProjectId,cChartProjectCode,cChartProjectName,cReportName,bDefault from QmChartProject_base\r\nwhere localeid=dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QmChartProject"},{"field":"Type","value":"View"}],"columns":[{"id":"column-278404","object_id":"column-278404","name":"cChartProjectId","name_without_path":"cChartProjectId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278405","object_id":"column-278405","name":"cChartProjectCode","name_without_path":"cChartProjectCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278406","object_id":"column-278406","name":"cChartProjectName","name_without_path":"cChartProjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278407","object_id":"column-278407","name":"cReportName","name_without_path":"cReportName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278408","object_id":"column-278408","name":"bDefault","name_without_path":"bDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"TR_qmchartproject_InsteadofDelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"TR_qmchartproject_InsteadofInsert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"TR_qmchartproject_InsteadofUpdate","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};