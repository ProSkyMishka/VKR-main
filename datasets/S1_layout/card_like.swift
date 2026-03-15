import SwiftUI
struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Card Title").font(.headline)
            Text("Card body text here.")
        }
        .padding(16)
        .background(Color.gray.opacity(0.15))
        .cornerRadius(12)
    }
}
