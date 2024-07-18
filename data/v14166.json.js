window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14166","name":"VQD_V_Rpt_ReportView_Def","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.VQD_V_Rpt_ReportView_Def\r\nAS\r\nSELECT dbo.VQD_Rpt_ReportView.Guid, dbo.VQD_Rpt_ReportView.ReportID, \r\n      CONVERT(money, dbo.VQD_Rpt_ReportViewUFTS.ts) AS ts, \r\n      CASE WHEN EXISTS\r\n          (SELECT Caption\r\n         FROM VQD_Rpt_ReportViewLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND \r\n               ViewID = dbo.VQD_Rpt_ReportView.Guid) THEN\r\n          (SELECT Caption\r\n         FROM VQD_Rpt_ReportViewLang\r\n         WHERE Localid = dbo.UDF_GetLocaleID() AND \r\n               ViewID = dbo.VQD_Rpt_ReportView.Guid) ELSE\r\n          (SELECT Caption\r\n         FROM VQD_Rpt_ReportViewLang\r\n         WHERE Localid = 'zh-CN' AND ViewID = dbo.VQD_Rpt_ReportView.Guid) \r\n      END AS Caption, ISNULL(dbo.VQD_Rpt_ReportView.bSystem, 0) AS bSystem, \r\n      ISNULL(dbo.VQD_Rpt_ReportView.bDefault, 0) AS bDefault\r\nFROM dbo.VQD_Rpt_ReportView INNER JOIN\r\n      dbo.VQD_Rpt_ReportViewUFTS ON \r\n      dbo.VQD_Rpt_ReportView.Guid = dbo.VQD_Rpt_ReportViewUFTS.ViewID AND \r\n      dbo.VQD_Rpt_ReportViewUFTS.OpType = 0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"VQD_V_Rpt_ReportView_Def"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419155","object_id":"column-419155","name":"Guid","name_without_path":"Guid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419156","object_id":"column-419156","name":"ReportID","name_without_path":"ReportID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419157","object_id":"column-419157","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419158","object_id":"column-419158","name":"Caption","name_without_path":"Caption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419159","object_id":"column-419159","name":"bSystem","name_without_path":"bSystem","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419160","object_id":"column-419160","name":"bDefault","name_without_path":"bDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};