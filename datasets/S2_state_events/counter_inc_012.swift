import SwiftUI

struct ContentView: View {
    @State private var count = 5

    var body: some View {
        VStack(spacing: 12) {
            Text("ci012-count: \(count)")
                .font(.title3)
            Button("ci012-inc") { count += 3 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
