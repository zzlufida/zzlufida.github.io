window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10764","name":"FD_CreAcrRcp","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  view FD_CreAcrRcp as\r\n--内部贷款还息\r\nSELECT fd_transactions.transactions_id,fd_transactions.CORRESPOND_VCH_ID,stuff(fd_transactions.transactions_code, 1, 0, '11') \r\n      AS cCraID, stuff(fd_transactions1.transactions_code, 1, 0, '06') AS cCreID, \r\n      fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      SettleStyle.cSSCode AS iSettle, case when fd_transactions.commission_mny is null then 0 else fd_transactions.commission_mny  end AS mMoney, \r\n      fd_transactions.bill_name AS cTran_Name, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.return_date AS dRet_Date, \r\n      fd_transactions.digest AS cDigest, fd_transactions.exchange_rate AS nFrat, \r\n       case when  fd_transactions.natural_mny is null then 0 else  fd_transactions.natural_mny  end  AS mMoney_F, fd_transactions.calctype_flag AS iArtyp, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_accunit ON fd_accdef.accunit_id = fd_accunit.accunit_id LEFT JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id LEFT JOIN\r\n      SettleStyle ON fd_transactions.settle_code = SettleStyle.cSSCode LEFT JOIN\r\n      code ON fd_transactions.equalsubject_code = code.ccode\r\nWHERE (fd_entities.iBIType = 42 OR\r\n      fd_entities.iDeriveBIType = 42)\r\nUNION\r\n--银行贷款还息\r\nSELECT fd_transactions.transactions_id,fd_transactions.CORRESPOND_VCH_ID,stuff(fd_transactions.transactions_code, 1, 0, '10') \r\n      AS cCraID, stuff(fd_transactions1.transactions_code, 1, 0, '05') AS cCreID, \r\n      fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      SettleStyle.cSSCode AS iSettle,  case when fd_transactions.commission_mny is null then 0 else fd_transactions.commission_mny  end  AS mMoney, \r\n      fd_transactions.bill_name AS cTran_Name, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.return_date AS dRet_Date, \r\n      fd_transactions.digest AS cDigest, fd_transactions.exchange_rate AS nFrat, \r\n        case when  fd_transactions.natural_mny is null then 0 else  fd_transactions.natural_mny  end   AS mMoney_F, fd_transactions.calctype_flag AS iArtyp, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_accunit ON fd_accdef.accunit_id = fd_accunit.accunit_id LEFT JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id LEFT JOIN\r\n      SettleStyle ON fd_transactions.settle_code = SettleStyle.cSSCode LEFT JOIN\r\n      code ON fd_transactions.equalsubject_code = code.ccode\r\nWHERE (fd_entities.iBIType = 46 OR\r\n\t\tfd_entities.iDeriveBIType = 46)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FD_CreAcrRcp"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204659","object_id":"column-204659","name":"transactions_id","name_without_path":"transactions_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204660","object_id":"column-204660","name":"CORRESPOND_VCH_ID","name_without_path":"CORRESPOND_VCH_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204661","object_id":"column-204661","name":"cCraID","name_without_path":"cCraID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204662","object_id":"column-204662","name":"cCreID","name_without_path":"cCreID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204663","object_id":"column-204663","name":"cAccID","name_without_path":"cAccID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204664","object_id":"column-204664","name":"dBill_Date","name_without_path":"dBill_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204665","object_id":"column-204665","name":"iSettle","name_without_path":"iSettle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204666","object_id":"column-204666","name":"mMoney","name_without_path":"mMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204667","object_id":"column-204667","name":"cTran_Name","name_without_path":"cTran_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204668","object_id":"column-204668","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204669","object_id":"column-204669","name":"cCheckCode","name_without_path":"cCheckCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204670","object_id":"column-204670","name":"cBookCode","name_without_path":"cBookCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204671","object_id":"column-204671","name":"cIntrID","name_without_path":"cIntrID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204672","object_id":"column-204672","name":"cCadID","name_without_path":"cCadID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204673","object_id":"column-204673","name":"dRet_Date","name_without_path":"dRet_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204674","object_id":"column-204674","name":"cDigest","name_without_path":"cDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204675","object_id":"column-204675","name":"nFrat","name_without_path":"nFrat","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"16, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204676","object_id":"column-204676","name":"mMoney_F","name_without_path":"mMoney_F","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204677","object_id":"column-204677","name":"iArtyp","name_without_path":"iArtyp","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204678","object_id":"column-204678","name":"bSettle","name_without_path":"bSettle","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204679","object_id":"column-204679","name":"money_name","name_without_path":"money_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};