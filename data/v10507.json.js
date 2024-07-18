window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10507","name":"EB_View_HRCT007","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [EB_View_HRCT007]\r\nas \r\n--物流公司校验区域档案视图\r\nselect province.ccodeID as cProvinceID,Province.vsimplename as cProvinceName,\r\ncity.cCityID,City.cCityName,Conty.cContyID,Conty.cContyName from HR_CT007 as Province \r\nleft join (select  ccodeid as cCityID ,vsimplename as cCityName,cpCodeID from HR_CT007 where ilevels =1) as City \r\non City.cpCodeID =Province.ccodeID \r\nleft join (select ccodeid as cContyID,vsimplename as cContyName,cpCodeID from HR_CT007 where ilevels=2) as Conty \r\non Conty.cpCodeID = City.cCityID  where Province.ilevels =0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_HRCT007"},{"field":"Type","value":"View"}],"columns":[{"id":"column-191783","object_id":"column-191783","name":"cProvinceID","name_without_path":"cProvinceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191784","object_id":"column-191784","name":"cProvinceName","name_without_path":"cProvinceName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191785","object_id":"column-191785","name":"cCityID","name_without_path":"cCityID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191786","object_id":"column-191786","name":"cCityName","name_without_path":"cCityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191787","object_id":"column-191787","name":"cContyID","name_without_path":"cContyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191788","object_id":"column-191788","name":"cContyName","name_without_path":"cContyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};