window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14232","name":"vwContractExplore","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW vwContractExplore As\r\n----合同导航视图,标的明细\r\nSELECT C.GUID, C.strContractID, case when C.istatus=0 then N'A' when C.istatus=1 then N'B' when C.istatus=2 then N'C' end  AS Src,C.intPre, IsNull(C.intVaryID,0) as intVaryID, \r\n\tIsNull(CA.intVaryID,0) As UnInureVary,\tIV.dblTotalCurrency, IV.dblTotalQuantity,IV.dblTotalRMB,--代理进口增加\r\n\t--执行金额\r\n\t(Case   When (C.strContractKind like N'应%' and CM_SystemSet.cValue=N'1') then EI.dblExecCurrency\r\n    When (C.strContractKind like N'应%' and CM_SystemSet.cValue=N'0') then CI.dblBalanceRateMoney  \r\n\t\tWhen (C.strContractKind like N'采购类合同' and C.bUseStage = 0) then V2.decExecRateMoney\r\n\t\tWhen (C.strContractKind like N'销售类合同' and C.bUseStage = 0) then V3.decExecRateMoney \t\r\n\t\tWhen (C.strContractKind like N'采购类合同' and C.bUseStage = 1 and C.intpre <> 0) then V2.decExecRateMoney\r\n\t\tWhen (C.strContractKind like N'销售类合同' and C.bUseStage = 1 and C.intpre <> 0) then V3.decExecRateMoney \t\r\n\t\tWhen (C.strContractKind like N'出口类合同' and C.bUseStage = 0) then V4.decExecRateMoney \t\r\n\t\tWhen (C.strContractKind like N'进口类合同' and C.bUseStage = 0) then V5.decExecRateMoney \t\r\n\t\tWhen ((C.strContractKind like N'销售类合同'  or C.strContractKind = N'采购类合同') and C.bUseStage = 1 and C.intpre = 0) then EI.dblExecCurrency \r\n\t\tEnd) As dblExecCurrency,\r\n\t--结算金额\r\n\t(Case When C.strContractKind like N'应%' then CI.dblBalanceRateMoney \r\n\t      When (C.strContractKind like N'采购类合同' and C.bUseStage = 0) then PB.dblBalanceRateMoney\r\n\t      When (C.strContractKind like N'销售类合同' and C.bUseStage = 0)  then SB.dblBalanceRateMoney\r\n\t\t  When (C.strContractKind like N'采购类合同' and C.bUseStage = 1 and C.intpre <> 0) then PB.dblBalanceRateMoney\r\n\t\t  When (C.strContractKind like N'销售类合同' and C.bUseStage = 1 and C.intpre <> 0) then SB.dblBalanceRateMoney\t\r\n\t      When (C.strContractKind like N'进口类合同' and C.bUseStage = 0) then IB.dblBalanceRateMoney\r\n\t      When (C.strContractKind like N'出口类合同' and C.bUseStage = 0)  then EB.dblBalanceRateMoney\r\n\t\t\t\tWhen ((C.strContractKind like N'销售类合同'  or C.strContractKind = N'采购类合同') and C.bUseStage = 1 and C.intpre = 0) then CMSP.dblBalanceRateMoney\r\n\t      else 0 End) As dblBalanceCurrency,\r\n\t--执行数量\r\n\t(Case  \r\n\t\tWhen (C.strContractKind like N'应%' and CM_SystemSet.cValue=N'1') then EI.decExecCount\r\n\t\tWhen (C.strContractKind like N'应%' and CM_SystemSet.cValue=N'0') then CI.dblBalanceCount\r\n\t\tWhen (C.strContractKind like N'采购类合同' and C.bUseStage = 0) then V2.decExecCount\r\n\t\tWhen (C.strContractKind like N'销售类合同' and C.bUseStage = 0) then V3.decExecCount \t\r\n\t\tWhen (C.strContractKind like N'采购类合同' and C.bUseStage = 1 and C.intpre <> 0) then V2.decExecCount\r\n\t\tWhen (C.strContractKind like N'销售类合同' and C.bUseStage = 1 and C.intpre <> 0) then V3.decExecCount \t\r\n\t\tWhen (C.strContractKind = N'出口类合同' and C.bUseStage = 0) then V4.decExecCount \t\r\n\t\tWhen (C.strContractKind = N'进口类合同' and C.bUseStage = 0) then V5.decExecCount \t\r\n\t\tWhen ((C.strContractKind like N'销售类合同'  or C.strContractKind = N'采购类合同')  and C.bUseStage = 1 and C.intpre = 0) then EI.decExecCount \r\n\t\tEnd) As dblExecQuantity,\r\n\t--收付款金额\r\n\t(Case When C.strContractKind like N'应%' then IsNull(CI2.decRateMoneyAPAR,0)+IsNUll(dblExecRpMoney,0)\r\n\t\tWhen C.strContractKind like N'采购类合同' and C.bUseStage = 0 then V2.decRateMoneyAPAR\r\n\t\tWhen C.strContractKind like N'销售类合同' and C.bUseStage = 0 then V3.decRateMoneyAPAR \r\n\t\tWhen (C.strContractKind like N'采购类合同' and C.bUseStage = 1 and C.intpre <> 0) then V2.decRateMoneyAPAR\r\n\t\tWhen (C.strContractKind like N'销售类合同' and C.bUseStage = 1 and C.intpre <> 0) then V3.decRateMoneyAPAR \t\r\n\t\tWhen C.strContractKind like N'出口类合同' and C.bUseStage = 0 then V4.decRateMoneyAPAR\r\n\t\tWhen C.strContractKind like N'进口类合同' and C.bUseStage = 0 then V5.decRateMoneyAPAR \r\n\t\tWhen (C.strContractKind =  N'销售类合同'  or C.strContractKind = N'采购类合同') and C.bUseStage = 1  and C.intpre = 0 then EI.dblExecRpMoney\r\n\t\tEnd) As dblAPARCurrency,\r\n\tT.cTypeName, TC.cClassName,G.cGroupName,C.strContractName,C.strContractGrp,C.strContractKind, \r\n\tC.strContractType,C.strParentID,M.strSource,M.intDetail,M.dblPreAPARCurrency,C.strCurrency,\r\n\t(case Upper(C.strSource) when N'C' then dbo.UDF_GetResourceMessageByID('U8.CW.CM.Customer') \r\n\twhen N'V' then dbo.UDF_GetResourceMessageByID('U8.CW.CM.Vendor') end) as strUnitSource,\r\n\t(case Upper(C.strSource) when N'C' then CT.cCusName when N'V' then VD.cVenName end) as strBisectionUnitName,\r\n\tC.strSetupPerson, C.strInurePerson, C.strEndCasePerson,CT.iID as CusIID,VD.iID as VenIID, C.strDeptID,\r\n\tC.strWay,C.strBisectionPerson,C.strContractOrderDate,C.strContractStartDate,C.strContractEndDate,C.strPersonID,\r\n\tC.strSetupDate,C.strEndCaseDate,C.strInureDate,C.dblMassassureScale,C.dblMassassure,C.strRepair,C.strBisectionUnit,\r\n\tC.dtModifyDate,C.cModifer,incoterms.cincotermcode,C.cBusType,C.cSourceType,C.strVaryPassPersonID,\r\n\t(case when (isnull(c.iswfcontrolled,0)=1 and isnull(c.iverifystate,0)=0) then 0 when (isnull(c.iswfcontrolled,0)=1 and isnull(c.iverifystate,0)<>0) then 1 else 2 end) as bSubmitted \r\nFROM CM_Contract_B C\r\n\tinner join CM_SystemSet on CM_SystemSet.cName=N'bUseExecBill'\r\n\tINNER JOIN CM_Type T ON  C.strContractType = T.cTypeCode \r\n\tINNER JOIN CM_TypeClass TC ON T.cClassCode = TC.cClassCode \r\n\tINNER JOIN CM_Contract_Main M ON C.strContractID=M.strContractID\r\n\tLeft JOin CM_Group G On G.cGroupID=C.strContractGrp\r\n  Left JOin CM_Contract_C CA On C.strContractID=CA.strContractID And CA.istatus=0\r\n\tLEFT JOIN dbo.Customer CT ON C.strBisectionUnit=CT.cCusCode\r\n\tLEFT JOIN dbo.Vendor VD ON C.strBisectionUnit=VD.cVenCode\r\n\tleft join v_ex_incoterms incoterms on c.iincotermid=incoterms.iincotermid\r\n\tLeft JOIN \r\n\t(\r\n\t\tSelect E.cContractID,sum(decCount) as decExecCount,sum(decRateMoney) as dblExecCurrency,IsNull(Sum(IRPMoney),0) as dblExecRpMoney \r\n\t\tfrom CM_ExecuteBill E inner join CM_ExecuteBills EB on E.cExecID = EB.cExecID where isnull (E.dtAuditDate, N'') <> N''\r\n\t\tGroup by cContractID\r\n\t)EI On C.strContractID = EI.cContractID\r\n\tleft JOIN (\r\n\t\tselect GUID,sum(isnull(dblSum,0)) AS dblTotalCurrency,sum(isnull(dblQuantity,0)) AS dblTotalQuantity\r\n\t\t,Sum(ISNULL(dblSumRMB,0)) as dblTotalRMB  --代理进口增加\r\n\t\tfrom CM_Contract_Item_B where intEnd=1 and intFlag <> 1 group by GUID) IV ON IV.GUID=C.GUID\r\n    left join(\r\n\t\t\t-- Simon U8V10\r\n\t\t\tselect b.cContractID, sum(isnull(bs.decRateMoney,0)) as dblBalanceRateMoney, sum(isnull(bs.decCount,0)) as dblBalanceCount\r\n\t\t\tfrom CM_Balance b left join CM_Balances bs on b.cBalanceID=bs.cBalanceID where isnull (b.dtAuditeDate , N'') <> N''\r\n\t\t\tgroup by b.cContractID\r\n\t\t) CI On C.strContractID=CI.cContractID And C.strContractKind like N'应%'\r\n\tleft join(\tselect distinct b2.cContractID,sum(isnull(bd2.decMoney,0)) as decRateMoneyAPAR\r\n\t\t\tfrom CM_Balance b2\r\n\t\t\tleft join CM_BalanceDetail bd2 on b2.cBalanceID=bd2.cBalanceID and IsNull(bd2.cExecID,'')=''  \r\n\t\t\twhere isnull(bd2.cProcStyle,'') not like 'XJ%' or (bd2.cProcStyle like 'XJ%' and bd2.cCancelNo in (select strSpare3 from CM_Balance))\r\n\t\t\tgroup by b2.cContractID\r\n\t\t) CI2 On C.strContractID=CI2.cContractID And C.strContractKind like N'应%' \r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'采购订单' Group By cContractID) V2\r\n\tOn V2.cContractID=C.strContractID And C.strContractKind=N'采购类合同'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'销售订单' Group By cContractID) V3\r\n\tOn V3.cContractID=C.strContractID And C.strContractKind=N'销售类合同'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'出口订单' Group By cContractID) V4\r\n\tOn V4.cContractID=C.strContractID And C.strContractKind=N'出口类合同'\r\n\tLEFT JOIN (Select cContractID,Sum(decCount) As decExecCount,Sum(decRateMoney) As decExecRateMoney,Sum(decRateMoneyAPAR) As decRateMoneyAPAR\r\n\tfrom CM_ExecInterface Where cOrderType=N'进口订单' Group By cContractID) V5\r\n\tOn V5.cContractID=C.strContractID And C.strContractKind=N'进口类合同'\r\n\tLeft Join \r\n\t(Select sum(PBS.iOriSum) as dblBalanceRateMoney,strContractID\r\n\tFrom purbillvouchs PBS\r\n\tInner Join purbillvouch  PB On PB.pbvid =PBS.pbvid \r\n\tInner JOIN VWCONTRACTPOSA ON PBS.contractrowguid=VWCONTRACTPOSA.RowGUID\r\n\tGroup By strContractID\r\n\t) PB On C.strContractID=PB.strContractID And C.strContractKind = N'采购类合同'\r\n\t--销售发票结算信息\r\n\tLeft Join (Select sum(SBS.iSum) as dblBalanceRateMoney,SBS.cContractID\r\n\tFrom SaleBillVouchs SBS Inner Join SaleBillVouch SB On SB.sbvID =SBS.sbvID \r\n\tGroup By SBS.cContractID \r\n\t) SB On C.strContractID=SB.cContractID  And C.strContractKind = N'销售类合同'\r\n\t--进口发票结算信息\r\n--U8dp201421501 20111220 关联im_invoice\r\n\tleft join (select sum(im_invoicedetail.fmoney) as dblBalanceRateMoney,im_invoicedetail.cContractID\r\n\tfrom im_invoicedetail \r\n    Inner Join im_invoice On im_invoice.id =im_invoicedetail.id and (im_invoice.cvouchtype ='im90' or im_invoice.cvouchtype ='im91' )\r\n    where IsNull(im_invoicedetail.cContractID  ,'')<>''  \r\n\tgroup by im_invoicedetail.cContractID\r\n\t) IB on C.strcontractID=IB.cContractID and C.strContractKind = N'进口类合同'\r\n\t--出口发票结算信息\r\n--U8dp201421501 20111220 关联ex_invoice\r\n\tleft join (select sum(ex_invoicedetail.ftaxmoney) as dblBalanceRateMoney,ex_invoicedetail.cContractID\r\n\tfrom ex_invoicedetail \r\n\tInner Join ex_invoice On ex_invoice.id = ex_invoicedetail.id and (ex_invoice.cvouchtype ='ex26' or ex_invoice.cvouchtype ='ex27' )\r\n    where IsNull(ex_invoicedetail.ccontractid,'')<>''  \r\n\tgroup by ex_invoicedetail.cContractID\r\n\t) EB on C.strcontractID=EB.cContractID and C.strContractKind = N'出口类合同'\r\n\t--合同阶段付款\r\n\tLeft Join\r\n\t(\r\n\tSelect Sum(CM_StagePay.iTaxMoney) as dblBalanceRateMoney,cContractID\r\n\tFrom CM_StagePay inner join CM_ExecuteBill on CM_StagePay.cExecID = CM_ExecuteBill.cExecID\r\n\tGroup by CM_ExecuteBill.cContractID\t\r\n\t) CMSP On C.strContractID = CMSP.cContractID  And (C.strContractKind = N'销售类合同' or C.strContractKind = N'采购类合同')  and C.bUseStage = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwContractExplore"},{"field":"Type","value":"View"}],"columns":[{"id":"column-422726","object_id":"column-422726","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422727","object_id":"column-422727","name":"strContractID","name_without_path":"strContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422728","object_id":"column-422728","name":"Src","name_without_path":"Src","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422729","object_id":"column-422729","name":"intPre","name_without_path":"intPre","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422730","object_id":"column-422730","name":"intVaryID","name_without_path":"intVaryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422731","object_id":"column-422731","name":"UnInureVary","name_without_path":"UnInureVary","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422732","object_id":"column-422732","name":"dblTotalCurrency","name_without_path":"dblTotalCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422733","object_id":"column-422733","name":"dblTotalQuantity","name_without_path":"dblTotalQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422734","object_id":"column-422734","name":"dblTotalRMB","name_without_path":"dblTotalRMB","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422735","object_id":"column-422735","name":"dblExecCurrency","name_without_path":"dblExecCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422736","object_id":"column-422736","name":"dblBalanceCurrency","name_without_path":"dblBalanceCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"38, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422737","object_id":"column-422737","name":"dblExecQuantity","name_without_path":"dblExecQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422738","object_id":"column-422738","name":"dblAPARCurrency","name_without_path":"dblAPARCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422739","object_id":"column-422739","name":"cTypeName","name_without_path":"cTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422740","object_id":"column-422740","name":"cClassName","name_without_path":"cClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422741","object_id":"column-422741","name":"cGroupName","name_without_path":"cGroupName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422742","object_id":"column-422742","name":"strContractName","name_without_path":"strContractName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"400","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422743","object_id":"column-422743","name":"strContractGrp","name_without_path":"strContractGrp","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422744","object_id":"column-422744","name":"strContractKind","name_without_path":"strContractKind","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422745","object_id":"column-422745","name":"strContractType","name_without_path":"strContractType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422746","object_id":"column-422746","name":"strParentID","name_without_path":"strParentID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422747","object_id":"column-422747","name":"strSource","name_without_path":"strSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422748","object_id":"column-422748","name":"intDetail","name_without_path":"intDetail","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422749","object_id":"column-422749","name":"dblPreAPARCurrency","name_without_path":"dblPreAPARCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422750","object_id":"column-422750","name":"strCurrency","name_without_path":"strCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422751","object_id":"column-422751","name":"strUnitSource","name_without_path":"strUnitSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422752","object_id":"column-422752","name":"strBisectionUnitName","name_without_path":"strBisectionUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422753","object_id":"column-422753","name":"strSetupPerson","name_without_path":"strSetupPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422754","object_id":"column-422754","name":"strInurePerson","name_without_path":"strInurePerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422755","object_id":"column-422755","name":"strEndCasePerson","name_without_path":"strEndCasePerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422756","object_id":"column-422756","name":"CusIID","name_without_path":"CusIID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422757","object_id":"column-422757","name":"VenIID","name_without_path":"VenIID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422758","object_id":"column-422758","name":"strDeptID","name_without_path":"strDeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422759","object_id":"column-422759","name":"strWay","name_without_path":"strWay","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422760","object_id":"column-422760","name":"strBisectionPerson","name_without_path":"strBisectionPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422761","object_id":"column-422761","name":"strContractOrderDate","name_without_path":"strContractOrderDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422762","object_id":"column-422762","name":"strContractStartDate","name_without_path":"strContractStartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422763","object_id":"column-422763","name":"strContractEndDate","name_without_path":"strContractEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422764","object_id":"column-422764","name":"strPersonID","name_without_path":"strPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422765","object_id":"column-422765","name":"strSetupDate","name_without_path":"strSetupDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422766","object_id":"column-422766","name":"strEndCaseDate","name_without_path":"strEndCaseDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422767","object_id":"column-422767","name":"strInureDate","name_without_path":"strInureDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422768","object_id":"column-422768","name":"dblMassassureScale","name_without_path":"dblMassassureScale","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422769","object_id":"column-422769","name":"dblMassassure","name_without_path":"dblMassassure","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422770","object_id":"column-422770","name":"strRepair","name_without_path":"strRepair","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422771","object_id":"column-422771","name":"strBisectionUnit","name_without_path":"strBisectionUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422772","object_id":"column-422772","name":"dtModifyDate","name_without_path":"dtModifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422773","object_id":"column-422773","name":"cModifer","name_without_path":"cModifer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422774","object_id":"column-422774","name":"cincotermcode","name_without_path":"cincotermcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422775","object_id":"column-422775","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422776","object_id":"column-422776","name":"cSourceType","name_without_path":"cSourceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422777","object_id":"column-422777","name":"strVaryPassPersonID","name_without_path":"strVaryPassPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422778","object_id":"column-422778","name":"bSubmitted","name_without_path":"bSubmitted","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};