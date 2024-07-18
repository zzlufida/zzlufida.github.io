window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12282","name":"SA_SalePlan_Peron","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.SA_SalePlan_Peron\r\nAS\r\nSELECT MONTH(dbo.SaleBillVouch.dDate) AS imonth, dbo.SaleBillVouch.cPersonCode, \r\n      SUM(dbo.SaleBillVouchs.iNatMoney) AS inatmoney, \r\n      SUM(dbo.SaleBillVouchs.iNatSum) AS inatsum\r\nFROM dbo.SaleBillVouch INNER JOIN\r\n      dbo.SaleBillVouchs ON \r\n      dbo.SaleBillVouch.SBVID = dbo.SaleBillVouchs.SBVID\r\nWHERE (dbo.SaleBillVouch.bFirst = 0) AND (ISNULL(dbo.SaleBillVouch.cInvalider, '') = '') \r\n      AND (ISNULL(dbo.SaleBillVouch.cPersonCode, '') <> '')\r\nGROUP BY dbo.SaleBillVouch.cPersonCode, MONTH(dbo.SaleBillVouch.dDate)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_SalePlan_Peron"},{"field":"Type","value":"View"}],"columns":[{"id":"column-293114","object_id":"column-293114","name":"imonth","name_without_path":"imonth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-293115","object_id":"column-293115","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-293116","object_id":"column-293116","name":"inatmoney","name_without_path":"inatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-293117","object_id":"column-293117","name":"inatsum","name_without_path":"inatsum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};