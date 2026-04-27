import SwiftUI

struct ContentView: View {
    var body: some View {
        ScrollView {
            VStack(spacing: 10) {
                VStack(alignment: .leading, spacing: 4) {
                    Text("sc001-card1")
                        .font(.headline)
                    Text("sc001-card1-body")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .padding(12)
                .background(Color(white: 0.96))
                .cornerRadius(8)
                VStack(alignment: .leading, spacing: 4) {
                    Text("sc001-card2")
                        .font(.headline)
                    Text("sc001-card2-body")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .padding(12)
                .background(Color(white: 0.96))
                .cornerRadius(8)
                VStack(alignment: .leading, spacing: 4) {
                    Text("sc001-card3")
                        .font(.headline)
                    Text("sc001-card3-body")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .padding(12)
                .background(Color(white: 0.96))
                .cornerRadius(8)
                VStack(alignment: .leading, spacing: 4) {
                    Text("sc001-card4")
                        .font(.headline)
                    Text("sc001-card4-body")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .padding(12)
                .background(Color(white: 0.96))
                .cornerRadius(8)
            }
            .padding()
        }
    }
}
