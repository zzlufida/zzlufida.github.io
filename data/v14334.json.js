window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14334","name":"vwNEPzInExpenseOP","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwNEPzInExpenseOP\r\nAS\r\nSELECT dbo.NE_ExpenVouch.strBill, dbo.NE_ExpenVouch.strTypeCode, \r\n      dbo.NE_ExpenVouch.fltRate, dbo.NE_ExpenVouch.strDepartID, \r\n      dbo.Department.cDepName, dbo.NE_ExpenVouch.strLoanID, \r\n      dbo.Person.cPersonName, dbo.NE_ExpenVouch.strItemClassID, \r\n      dbo.NE_ExpenVouch.strItemID, dbo.NE_ExpenVouch.dtLoanDate, \r\n      dbo.NE_ExpenVouch.GUID, dbo.NE_ExpenVouch.strVouchID, \r\n      dbo.NE_BalanceInfo.intIOType, dbo.NE_BalanceInfo.strBalanceID, \r\n      dbo.SettleStyle.cSSName, dbo.NE_BalanceInfo.strPayBankID, \r\n      dbo.NE_BalanceInfo.dblMoney, \r\n      CAST(dbo.NE_BalanceInfo.dblMoney * dbo.NE_ExpenVouch.fltRate AS decimal(9, 2)) \r\n      AS dblOldMoney, dbo.NE_ExpenVouch.strUsed, \r\n      dbo.NE_ExpenVouch.intBudPass\r\nFROM dbo.NE_ExpenVouch INNER JOIN\r\n      dbo.NE_BalanceInfo ON \r\n      dbo.NE_ExpenVouch.GUID = dbo.NE_BalanceInfo.ExpenGUID LEFT OUTER JOIN\r\n      dbo.SettleStyle ON \r\n      dbo.NE_BalanceInfo.strBalanceID = dbo.SettleStyle.cSSCode LEFT OUTER JOIN\r\n      dbo.Person ON \r\n      dbo.NE_ExpenVouch.strLoanID = dbo.Person.cPersonCode LEFT OUTER JOIN\r\n      dbo.Department ON dbo.NE_ExpenVouch.strDepartID = dbo.Department.cDepCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwNEPzInExpenseOP"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424505","object_id":"column-424505","name":"strBill","name_without_path":"strBill","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424506","object_id":"column-424506","name":"strTypeCode","name_without_path":"strTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424507","object_id":"column-424507","name":"fltRate","name_without_path":"fltRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424508","object_id":"column-424508","name":"strDepartID","name_without_path":"strDepartID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424523","object_id":"column-424523","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424509","object_id":"column-424509","name":"strLoanID","name_without_path":"strLoanID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424524","object_id":"column-424524","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424510","object_id":"column-424510","name":"strItemClassID","name_without_path":"strItemClassID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424511","object_id":"column-424511","name":"strItemID","name_without_path":"strItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424512","object_id":"column-424512","name":"dtLoanDate","name_without_path":"dtLoanDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424513","object_id":"column-424513","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424514","object_id":"column-424514","name":"strVouchID","name_without_path":"strVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424515","object_id":"column-424515","name":"intIOType","name_without_path":"intIOType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424516","object_id":"column-424516","name":"strBalanceID","name_without_path":"strBalanceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424517","object_id":"column-424517","name":"cSSName","name_without_path":"cSSName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424518","object_id":"column-424518","name":"strPayBankID","name_without_path":"strPayBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424519","object_id":"column-424519","name":"dblMoney","name_without_path":"dblMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424520","object_id":"column-424520","name":"dblOldMoney","name_without_path":"dblOldMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"9, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424521","object_id":"column-424521","name":"strUsed","name_without_path":"strUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424522","object_id":"column-424522","name":"intBudPass","name_without_path":"intBudPass","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};