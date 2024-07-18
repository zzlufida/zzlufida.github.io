window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10776","name":"FD_Sav","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  VIEW dbo.FD_Sav\r\nAS\r\n--内部活期存款\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '03') \r\n      AS cSavID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 21 OR\r\n      fd_entities.iDeriveBIType = 21)\r\nUNION\r\n--银行收款单\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '01') \r\n      AS cSavID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 26 OR\r\n      fd_entities.iDeriveBIType = 26)\r\nUNION\r\n--银行结算单（收款账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '01') \r\n      AS cSavID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 28 OR\r\n      fd_entities.iDeriveBIType = 28)\r\nunion\r\n--内部定期存款（存款账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, \r\n      '03'), fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, 0 AS isc, \r\n      fd_transactions.bill_name AS cTran_Name, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.fixed_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 31 OR\r\n      fd_entities.iDeriveBIType = 31 or fd_entities.iBIType = 35 OR\r\n      fd_entities.iDeriveBIType = 35)\r\nUNION\r\n--内部定期取款（去向账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, \r\n      '03'), fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, 1 AS isc, \r\n      fd_transactions.bill_name AS cTran_Name, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 32 OR\r\n      fd_entities.iDeriveBIType = 32 or fd_entities.iBIType = 36 OR\r\n      fd_entities.iDeriveBIType = 36)\r\nUNION\r\n--银行定期存款（存款账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '01') \r\n      AS cSavID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      0 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.fixed_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 33 OR\r\n      fd_entities.iDeriveBIType = 33 or fd_entities.iBIType = 37 OR\r\n      fd_entities.iDeriveBIType = 37)\r\nUNION\r\n--银行定期取款（去向账户）\r\nSELECT fd_transactions.transactions_id, stuff(fd_transactions.transactions_code, 1, 0, '01') \r\n      AS cSavID, fd_accdef.cAccID AS cAccID, fd_transactions.bill_date AS dBill_Date, \r\n      1 AS isc, fd_transactions.bill_name AS cTran_Name, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_transactions.sum_mny AS mMoney, \r\n      fd_transactions.fixedmonth_num AS iMonth, fd_transactions.digest AS cDigest, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType INNER JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id\r\nWHERE (fd_entities.iBIType = 34 OR\r\n      fd_entities.iDeriveBIType = 34 or fd_entities.iBIType = 38 OR\r\n      fd_entities.iDeriveBIType = 38)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FD_Sav"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204815","object_id":"column-204815","name":"transactions_id","name_without_path":"transactions_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204816","object_id":"column-204816","name":"cSavID","name_without_path":"cSavID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204817","object_id":"column-204817","name":"cAccID","name_without_path":"cAccID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204818","object_id":"column-204818","name":"dBill_Date","name_without_path":"dBill_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204819","object_id":"column-204819","name":"isc","name_without_path":"isc","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204820","object_id":"column-204820","name":"cTran_Name","name_without_path":"cTran_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204821","object_id":"column-204821","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204822","object_id":"column-204822","name":"cCheckCode","name_without_path":"cCheckCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204823","object_id":"column-204823","name":"cBookCode","name_without_path":"cBookCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204824","object_id":"column-204824","name":"mMoney","name_without_path":"mMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204825","object_id":"column-204825","name":"iMonth","name_without_path":"iMonth","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204826","object_id":"column-204826","name":"cDigest","name_without_path":"cDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204827","object_id":"column-204827","name":"nFrat","name_without_path":"nFrat","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"16, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204828","object_id":"column-204828","name":"mMoney_F","name_without_path":"mMoney_F","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204829","object_id":"column-204829","name":"bSettle","name_without_path":"bSettle","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204830","object_id":"column-204830","name":"money_name","name_without_path":"money_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};