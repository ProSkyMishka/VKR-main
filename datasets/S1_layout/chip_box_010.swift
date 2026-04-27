import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip010-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 20)
                .padding(.vertical, 8)
                .frame(width: 90, height: 40)
                .background(Color.purple)
                .cornerRadius(20)
                .shadow(radius: 2)
        }
        .padding()
    }
}
