from re import match, findall


def parse_message(message):
    print(message)
    timestamp, user, message = findall(r'(\d+/\d+/\d+ \d+:\d+) - (.*?): ([\w\W]*)', message)[0]
    return {
        'timestamp': timestamp,
        'user': user,
        'message': message
    }


def is_new_message(line):
    return match(r'(\d+/\d+/\d+) (\d+:\d+) - ', line)


def parse_file(file):
    message = None
    for line in file:
        if is_new_message(line.decode('utf-8')):
            if message and match(r'(\d+/\d+/\d+ \d+:\d+) - (.*?): ([\w\W]*)', message):
                yield parse_message(message)
            message = line.decode('utf-8')
        else:
            message += line.decode('utf-8')
