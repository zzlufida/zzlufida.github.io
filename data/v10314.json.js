window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10314","name":"CM_QTrackMulti_AP","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE View CM_QTrackMulti_AP \r\nAs \r\nSelect distinct C.strContractID,C.strCode, Null As cBalanceID,    \r\n0 As iIndex,dbo.UDF_GetResourceMessageByID('U8.CW.CM.ContractItem') As VoucherType,C.strCode As VoucherCode,dblQuantity,    \r\ndblUntaxSum As dblSum1,dblSum As dblSum2,dblUntaxSumRMB As dblSum3,dblSumRMB As dblSum4    \r\nFrom CM_QTrackConItem C    \r\nUnion    \r\nSelect distinct Exe.cContractID As strContractID,Exe.cContractObjectID As strCode,Exe.cExecID As cBalanceID,    \r\niIndex,Exe.VoucherType,Exe.cExecID As VoucherCode,Exe.dblQuantity,Exe.dblSum1,Exe.dblSum2,Exe.dblSum3,Exe.dblSum4    \r\nFrom(    \r\n Select 1 As iIndex,dbo.UDF_GetResourceMessageByID('U8.CW.CM.Execute') As VoucherType,B.cExecID,B.cContractID,S.cContractObjectID,S.dblQuantity,S.dblSum1,S.dblSum2,S.dblSum3,S.dblSum4    \r\n From CM_QExecuteBill B     \r\n Join  ( Select cExecID,cContractObjectID,Sum(decCount) As dblQuantity,    \r\n  Sum(decNoRateMoney) As dblSum1,Sum(decRateMoney) As dblSum2,Sum(decNoRateBenBiMoney) As dblSum3,Sum(decRateBenBiMoney) As dblSum4     \r\n  from CM_ExecuteBills Group By cExecID,cContractObjectID ) S On B.cExecID=S.cExecID     \r\n) Exe    \r\nUnion    \r\nSelect distinct Bal.cContractID As strContractID,Bal.cCode As strCode,Bal.cBalanceID,    \r\n2 As iIndex,Bal.VoucherType,Bal.cBalanceID As VoucherCode,Bal.dblQuantity,Bal.dblSum1,Bal.dblSum2,Bal.dblSum3,Bal.dblSum4    \r\nFrom(    \r\n Select B.cVoucherType As VoucherType,B.cBalanceID,B.cContractID,S.cCode,S.dblQuantity,S.dblSum1,S.dblSum2,S.dblSum3,S.dblSum4    \r\n From CM_QBalanceView B     \r\n Join  ( Select cBalanceID,cCode,Sum(decCount) As dblQuantity,    \r\n  Sum(decNoRateMoney) As dblSum1,Sum(decRateMoney) As dblSum2,Sum(decNoRateRMB) As dblSum3,Sum(decRMB) As dblSum4     \r\n  from CM_Balances Group By cBalanceID,cCode ) S On B.cBalanceID=S.cBalanceID     \r\n) Bal    \r\nUnion    \r\nSelect distinct P.cContractID As strContractID,P.cCode As strCode,P.cBalanceID,    \r\n3 As iIndex,P.PVoucherType As VoucherType,P.cBill As VoucherCode,Null As dblQuantity,Null As dblSum1,P.decMoney As dblSum2,Null As dblSum3,P.decMoneyRMB As dblSum4    \r\nFrom(    \r\nSelect cVoucherType As PVoucherType,cContractID,cCode,cBalanceID,cBill,Sum(decMoney) As decMoney,Sum(decRMB) As decMoneyRMB    \r\n From CM_QBalanceDetailView Group by cVoucherType,cContractID,cBalanceID,cBill,cCode    \r\n) P","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QTrackMulti_AP"},{"field":"Type","value":"View"}],"columns":[{"id":"column-183596","object_id":"column-183596","name":"strContractID","name_without_path":"strContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183597","object_id":"column-183597","name":"strCode","name_without_path":"strCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183598","object_id":"column-183598","name":"cBalanceID","name_without_path":"cBalanceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183599","object_id":"column-183599","name":"iIndex","name_without_path":"iIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183600","object_id":"column-183600","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183601","object_id":"column-183601","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183602","object_id":"column-183602","name":"dblQuantity","name_without_path":"dblQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183603","object_id":"column-183603","name":"dblSum1","name_without_path":"dblSum1","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183604","object_id":"column-183604","name":"dblSum2","name_without_path":"dblSum2","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183605","object_id":"column-183605","name":"dblSum3","name_without_path":"dblSum3","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183606","object_id":"column-183606","name":"dblSum4","name_without_path":"dblSum4","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};