import SwiftUI

struct ContentView: View {
    @State private var count = 2

    var body: some View {
        VStack(spacing: 12) {
            Text("ci009-count: \(count)")
                .font(.title3)
            Button("ci009-inc") { count += 5 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
