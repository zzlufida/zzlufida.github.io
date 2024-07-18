window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12551","name":"TI_V_FcrSet","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW TI_V_FcrSet \r\nAS\r\nSELECT cFcrNum,\r\n(select cValue from TI_AccInformation where cname='cSalerTaxRegNo') cSalerTaxRegNo,\r\n(select cValue from TI_AccInformation where cname='cSalerName') cSalerName,\r\n(select cValue from TI_AccInformation where cname='cSalerBankName') cSalerBankName,\r\n(select cValue from TI_AccInformation where cname='cSalerAddrPhone') cSalerAddrPhone\r\nFROM TI_FcrSet  \r\nunion all\r\nSELECT '' cFcrNum,\r\n(select cValue from TI_AccInformation where cname='cSalerTaxRegNo') cSalerTaxRegNo,\r\n(select cValue from TI_AccInformation where cname='cSalerName') cSalerName,\r\n(select cValue from TI_AccInformation where cname='cSalerBankName') cSalerBankName,\r\n(select cValue from TI_AccInformation where cname='cSalerAddrPhone') cSalerAddrPhone","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TI_V_FcrSet"},{"field":"Type","value":"View"}],"columns":[{"id":"column-311214","object_id":"column-311214","name":"cFcrNum","name_without_path":"cFcrNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-311215","object_id":"column-311215","name":"cSalerTaxRegNo","name_without_path":"cSalerTaxRegNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-311216","object_id":"column-311216","name":"cSalerName","name_without_path":"cSalerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-311217","object_id":"column-311217","name":"cSalerBankName","name_without_path":"cSalerBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-311218","object_id":"column-311218","name":"cSalerAddrPhone","name_without_path":"cSalerAddrPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};