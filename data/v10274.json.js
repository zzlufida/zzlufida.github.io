window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10274","name":"CM_QGetPayMoney","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW CM_QGetPayMoney As\r\n----合同导航视图,标的明细\r\nSELECT C.GUID, C.strContractID,\r\n\t--收付款金额\r\n\t(Case When C.strContractKind like N'应%' then IsNull(CI2.decRateMoneyAPAR,0)+IsNUll(dblExecRpMoney,0)\r\n\t\tWhen C.strContractKind like  N'采购类合同' and C.bUseStage = 0 then V2.decRateMoneyAPAR\r\n\t\tWhen C.strContractKind like  N'销售类合同' and C.bUseStage = 0 then V3.decRateMoneyAPAR\r\n\t\tWhen C.strContractKind like  N'出口类合同' and C.bUseStage = 0 then V4.decRateMoneyAPAR\r\n\t\tWhen C.strContractKind like  N'进口类合同' and C.bUseStage = 0 then V5.decRateMoneyAPAR\r\n\t\tWhen (C.strContractKind =  N'销售类合同'  or C.strContractKind = N'采购类合同') and C.bUseStage = 1 then EI.dblExecRpMoney\r\n\t\tEnd) As dblFactCurrency\r\nFROM CM_Contract_B C\r\n\tLeft JOIN\r\n\t(Select E.cContractID,sum(decCount) as decExecCount,sum(decRateMoney) as dblExecCurrency,IsNull(Sum(IRPMoney),0) as dblExecRpMoney\r\n\t\tfrom CM_ExecuteBill E inner join CM_ExecuteBills EB on E.cExecID = EB.cExecID where isnull (E.dtAuditDate, N'') <> N''\r\n\t\tGroup by cContractID\r\n\t)EI On C.strContractID = EI.cContractID\r\n\tleft join(\tselect distinct b2.cContractID,sum(isnull(bd2.decMoney,0)) as decRateMoneyAPAR\r\n\t\t\tfrom CM_Balance b2\r\n\t\t\tleft join CM_BalanceDetail bd2 on b2.cBalanceID=bd2.cBalanceID and IsNull(bd2.cExecID,'')=''\r\n\t\t\twhere isnull(bd2.cProcStyle,'') not like 'XJ%' or (bd2.cProcStyle like 'XJ%' and bd2.cCancelNo in (select strSpare3 from CM_Balance))\r\n\t\t\tgroup by b2.cContractID\r\n\t\t) CI2 On C.strContractID=CI2.cContractID And C.strContractKind like N'应%'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'采购订单' Group By cContractID) V2\r\n\tOn V2.cContractID=C.strContractID And C.strContractKind=N'采购类合同'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'销售订单' Group By cContractID) V3\r\n\tOn V3.cContractID=C.strContractID And C.strContractKind=N'销售类合同'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'出口订单' Group By cContractID) V4\r\n\tOn V4.cContractID=C.strContractID And C.strContractKind=N'出口类合同'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'进口订单' Group By cContractID) V5\r\n\tOn V5.cContractID=C.strContractID And C.strContractKind=N'进口类合同'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QGetPayMoney"},{"field":"Type","value":"View"}],"columns":[{"id":"column-181797","object_id":"column-181797","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-181798","object_id":"column-181798","name":"strContractID","name_without_path":"strContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-181799","object_id":"column-181799","name":"dblFactCurrency","name_without_path":"dblFactCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};