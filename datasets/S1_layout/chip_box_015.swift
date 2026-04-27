import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip015-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 13)
                .padding(.vertical, 13)
                .frame(width: 95, height: 45)
                .background(Color.purple)
                .cornerRadius(22)
                .shadow(radius: 2)
        }
        .padding()
    }
}
