import SwiftUI

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        VStack(spacing: 12) {
            Text("ci014-count: \(count)")
                .font(.title3)
            Button("ci014-inc") { count += 5 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
