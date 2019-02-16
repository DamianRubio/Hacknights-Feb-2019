from re import match


def parse_message(message):
    return message


def is_new_message(line):
    return match(r'(\d+/\d+/\d+) (\d+:\d+) - ', line)

def parse_file(file):
    message = ''
    for line in file:
        if is_new_message(line.decode('utf-8')):
            yield parse_message(message)
            message = line.decode('utf-8')
        else:
            message += line.decode('utf-8')
