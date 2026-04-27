import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("cb014-title")
                .font(.title)
                .bold()
            Text("cb014-subtitle")
                .font(.subheadline)
                .foregroundColor(.secondary)
            Divider()
            Text("cb014-body content")
                .font(.body)
                .lineLimit(3)
            HStack {
                Spacer()
                Text("cb014-action")
                    .font(.callout)
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding(16)
        .background(Color(white: 0.97))
        .cornerRadius(16)
    }
}
