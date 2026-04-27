import SwiftUI

struct ContentView: View {
    @State private var count = 6

    var body: some View {
        VStack(spacing: 12) {
            Text("ci006-count: \(count)")
                .font(.title3)
            Button("ci006-inc") { count += 2 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
