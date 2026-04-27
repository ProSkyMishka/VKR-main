import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("hb005-headline")
                    .font(.title)
                    .bold()
                Spacer()
                Text("hb005-tagline")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(white: 0.96))
            VStack(alignment: .leading, spacing: 8) {
                Text("hb005-content paragraph")
                    .font(.body)
                Text("hb005-extra")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding()
            HStack {
                Spacer()
                Text("hb005-footer")
                    .font(.footnote)
                    .foregroundColor(.gray)
                Spacer()
            }
            .padding(.bottom, 8)
        }
    }
}
