window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10329","name":"CM_QUFOBalance","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view CM_QUFOBalance\r\nas\r\nselect  distinct B.cBalanceID, B.dtProduceDate, B.cDeptID as strDeptID, B.cFunctionaryID as strPersonID,\r\n\tC.strCurrency, C.strSetupDate, C.strBisectionUnit, C.strContractID,\r\n\tCus.cCusCode, Cus.cCusName, CusC.cCCCode, Ven.cVenCode, Ven.cVenName, VenC.cVCCode\r\nfrom CM_Balance B\r\nleft join (select strContractID, strCurrency, strSetupDate, strBisectionUnit\r\n\tfrom (select * from CM_Contract_B union select * from CM_Contract_C) t \r\n\t) C on C.strContractID=B.cContractID\r\nleft join Customer Cus on Cus.cCusCode=C.strBisectionUnit\r\nleft join CustomerClass CusC on CusC.cCCCode=Cus.cCCCode\r\nleft join Vendor Ven on Ven.cVenCode=C.strBisectionUnit\r\nleft join VendorClass VenC on VenC.cVCCode=Ven.cVCCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QUFOBalance"},{"field":"Type","value":"View"}],"columns":[{"id":"column-183768","object_id":"column-183768","name":"cBalanceID","name_without_path":"cBalanceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183769","object_id":"column-183769","name":"dtProduceDate","name_without_path":"dtProduceDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183770","object_id":"column-183770","name":"strDeptID","name_without_path":"strDeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183771","object_id":"column-183771","name":"strPersonID","name_without_path":"strPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183772","object_id":"column-183772","name":"strCurrency","name_without_path":"strCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183773","object_id":"column-183773","name":"strSetupDate","name_without_path":"strSetupDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183774","object_id":"column-183774","name":"strBisectionUnit","name_without_path":"strBisectionUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183775","object_id":"column-183775","name":"strContractID","name_without_path":"strContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183776","object_id":"column-183776","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183777","object_id":"column-183777","name":"cCusName","name_without_path":"cCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183778","object_id":"column-183778","name":"cCCCode","name_without_path":"cCCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183779","object_id":"column-183779","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183780","object_id":"column-183780","name":"cVenName","name_without_path":"cVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183781","object_id":"column-183781","name":"cVCCode","name_without_path":"cVCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};