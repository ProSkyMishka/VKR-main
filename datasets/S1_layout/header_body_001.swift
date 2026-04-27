import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("hb001-headline")
                    .font(.title)
                    .bold()
                Spacer()
                Text("hb001-tagline")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(white: 0.96))
            VStack(alignment: .leading, spacing: 8) {
                Text("hb001-content paragraph")
                    .font(.body)
                Text("hb001-extra")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding()
            HStack {
                Spacer()
                Text("hb001-footer")
                    .font(.footnote)
                    .foregroundColor(.gray)
                Spacer()
            }
            .padding(.bottom, 8)
        }
    }
}
